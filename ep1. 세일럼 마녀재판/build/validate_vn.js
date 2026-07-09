// validate_vn.js — step5_build.md "진행 무결성 자동 검증" 구현
// 사용법: node validate_vn.js <scenes.json> <scenario.json>
const fs = require('fs');

const scenes = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const scenario = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

const errors = [];
const warns = [];
const byId = new Map(scenes.map((s, i) => [s.id, { scene: s, idx: i }]));

// ---- 1. 참조 무결성 + 폴스루 그래프 구성 ----
function sceneTargets(scene) {
  const targets = [];
  for (const l of scene.lines) {
    if (l.t === 'GOTO') targets.push(l.v);
    if (l.t === 'CHOICE') for (const o of l.options) targets.push(o.target);
  }
  return targets;
}

const edges = new Map();
scenes.forEach((s, i) => {
  let targets = sceneTargets(s);
  if (targets.length === 0 && i < scenes.length - 1) targets = [scenes[i + 1].id]; // 폴스루
  edges.set(s.id, targets);
  for (const t of targets) {
    if (!byId.has(t)) errors.push(`[참조] '${s.id}' → 미정의 씬 '${t}'`);
  }
});

// ---- 2. 도달성 (BFS) ----
const visited = new Set([scenes[0].id]);
const queue = [scenes[0].id];
while (queue.length) {
  const cur = queue.shift();
  for (const t of (edges.get(cur) || [])) {
    if (byId.has(t) && !visited.has(t)) { visited.add(t); queue.push(t); }
  }
}
for (const s of scenes) if (!visited.has(s.id)) errors.push(`[도달성] 고아 씬: ${s.id}`);

// ---- 3. 종결성: 막다른 씬(폴스루도 아니고 마지막도 아닌데 GOTO/CHOICE 없음)은 위에서 폴스루 처리됨.
//     여기선 "마지막 씬이 game_over가 아닌 경우"만 체크.
const last = scenes[scenes.length - 1];
if (last.id !== 'game_over') warns.push(`[종결] 마지막 씬이 game_over 아님: ${last.id}`);

// ---- 4. IF/ENDIF 짝 + 플래그/스탯/선택지 토큰 수집 ----
const flagSets = new Set();
const clueGets = new Set();
const itemGets = new Set();
const itemLoses = new Set();
const reqs = new Set();
const ifConditions = [];

for (const s of scenes) {
  let depth = 0;
  for (const l of s.lines) {
    if (l.t === 'IF') { depth++; ifConditions.push(l.cond); }
    if (l.t === 'ENDIF') depth--;
    if (l.t === 'FLAG_SET') flagSets.add(l.v);
    if (l.t === 'CLUE_GET') clueGets.add(l.v);
    if (l.t === 'ITEM_GET') itemGets.add(l.v);
    if (l.t === 'ITEM_LOSE') itemLoses.add(l.v);
    if (l.t === 'CHOICE') for (const o of l.options) if (o.req) reqs.add(o.req);
  }
  if (depth !== 0) errors.push(`[${s.id}] IF/ENDIF 불일치 (미닫힘 ${depth})`);
}

const pseudo = new Set(['no_escape']);
const knownStatWords = new Set(['정신력', '평판', '신앙', '법적방어력']);
for (const cond of ifConditions) {
  // stage1_choice == A / stage1_choice IN [A, C] / final_choice == B / 정신력 <= 50 / ergot_infected / NOT ergot_infected / AND
  const tokens = cond.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
  for (const tk of tokens) {
    if (['stage1_choice','stage2_choice','stage3_choice','final_choice','IN','AND','OR','NOT'].includes(tk)) continue;
    if (pseudo.has(tk)) continue;
    if (/^[A-Z]$/.test(tk)) continue; // 선택지 ID(A/B/C/D/E) — 플래그 아님
    if (!flagSets.has(tk)) warns.push(`[플래그] IF 조건 '${cond}' 참조 '${tk}'에 FLAG_SET 없음 (오탐 가능 — 스탯/선택지ID 조합 확인)`);
  }
}

for (const r of reqs) {
  if (!itemGets.has(r) && !clueGets.has(r)) errors.push(`[아이템] [REQ: ${r}]에 대응 ITEM_GET/CLUE_GET 없음`);
}
for (const l of itemLoses) {
  if (!itemGets.has(l)) errors.push(`[아이템] ITEM_LOSE '${l}'인데 ITEM_GET 없음`);
}

// ---- 5. 태그 문법: UNKNOWN 라인 (오탈자) ----
for (const s of scenes) {
  for (const l of s.lines) {
    if (l.t === 'UNKNOWN') errors.push(`[${s.id}] 인식 불가 라인: ${l.raw}`);
  }
}

// ---- 6. 스탯 시뮬레이션 (경로별 min/max 누적) ----
// scenario.json의 stats.initial + stage choices immediate_effects + entry_event downstream를 반영해
// 대략적 경로 조합으로 도달 가능 범위를 추정한다 (완전 탐색이 아닌 휴리스틱 — 설계 검증 보조용).
const initial = {};
for (const [k, v] of Object.entries(scenario.stats || {})) initial[k] = v.initial;

function statDeltaFromChoices(stage, choiceId) {
  const st = scenario.stages.find(s => s.id === stage);
  if (!st || !st.choices) return {};
  const ch = st.choices.find(c => c.id === choiceId);
  return (ch && ch.immediate_effects) || {};
}

// 정신력 최저 경로: S1-B(-10) + entry eat(-20) + S2-B(-20) [사용자 확정 조합 — balance_note 재현]
let sanity = initial.sanity;
sanity += (statDeltaFromChoices('stage1', 'B').sanity || 0);
sanity += -20; // entry_event eat
sanity += (statDeltaFromChoices('stage2', 'B').sanity || 0);
const gateSanity = (scenario.stages.find(s => s.id === 'final').stat_gates || [])
  .find(g => g.stat === 'sanity');
if (gateSanity) {
  const threshold = parseInt(gateSanity.condition.replace(/[^\d]/g, ''), 10);
  if (!(sanity <= threshold)) {
    errors.push(`[스탯게이트] 정신력 최저 경로(${sanity}) <= 게이트(${gateSanity.condition}) 불성립 — 도달 불가 콘텐츠 존재 가능`);
  } else {
    console.log(`  [확인] 정신력 최저경로=${sanity}, 게이트 ${gateSanity.condition} → 도달 가능 ✅`);
  }
}

// ---- 리포트 ----
console.log('==============================================');
console.log(`씬 ${scenes.length}개 검증 완료`);
console.log('==============================================');
if (errors.length) {
  console.log(`\n오류 ${errors.length}건:`);
  errors.forEach(e => console.log('  ' + e));
}
if (warns.length) {
  console.log(`\n경고 ${warns.length}건:`);
  warns.forEach(w => console.log('  ' + w));
}
if (!errors.length) console.log('\n오류 없음 — 빌드 진행 가능');
process.exit(errors.length ? 1 : 0);
