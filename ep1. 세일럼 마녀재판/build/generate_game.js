// generate_game.js — scenes.json + scenario.json → game.html (단일 파일 HTML5 VN)
const fs = require('fs');
const path = require('path');

const scenes = JSON.parse(fs.readFileSync(path.join(__dirname, 'scenes.json'), 'utf8'));
const scenario = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'scenario.json'), 'utf8'));

const statsInitial = {};
const statLabels = [];
for (const v of Object.values(scenario.stats)) { statsInitial[v.label] = v.initial; statLabels.push(v.label); }

const itemLabels = {};
for (const it of scenario.items) itemLabels[it.id] = it.label;

const DATA = { scenes, statsInitial, statLabels, itemLabels, title: scenario.title, episodeId: scenario.episode_id };

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Archive Oculus — ${DATA.title}</title>
<style>
  :root{
    --bg-panel: rgba(10,8,14,0.88);
    --text-main:#e8e2d8;
    --text-dim:#9d94a8;
    --accent:#b98cff;
    --accent-dim:#6b5590;
    --danger:#d95c5c;
    --gold:#d9b45c;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html,body{height:100%; overflow:hidden; background:#000;}
  body{
    font-family:'Noto Serif KR', 'Nanum Myeongjo', serif;
    color:var(--text-main);
    display:flex; align-items:center; justify-content:center;
  }
  #stage{
    position:relative; width:100%; height:100%; max-width:900px; max-height:100vh;
    display:flex; flex-direction:column; overflow:hidden;
    box-shadow:0 0 60px rgba(0,0,0,0.8);
  }
  #bg{
    position:absolute; inset:0; transition:background 0.6s ease; z-index:0;
  }
  #bg::after{ /* 필름 그레인/비네트 느낌 */
    content:''; position:absolute; inset:0;
    background:radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%);
    pointer-events:none;
  }
  #flash{
    position:absolute; inset:0; z-index:5; pointer-events:none; opacity:0;
    background:radial-gradient(circle at 70% 40%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.97) 60%, #000 100%);
  }
  #flash.active{ animation:flashpop 0.6s ease; }
  @keyframes flashpop{ 0%{opacity:0;} 15%{opacity:1;} 100%{opacity:0;} }

  #transition{
    position:absolute; inset:0; z-index:8; pointer-events:none;
    background:#000; opacity:0;
  }
  #transition.active{ animation:scenecut 0.7s ease; }
  @keyframes scenecut{ 0%{opacity:0;} 40%{opacity:1;} 60%{opacity:1;} 100%{opacity:0;} }

  #timeskipCard{
    position:absolute; inset:0; z-index:9; background:#000;
    display:none; align-items:center; justify-content:center; cursor:pointer;
  }
  #timeskipCard.show{ display:flex; animation:cardFade 0.5s ease; }
  #timeskipCard .line{ width:1px; height:0; background:var(--accent); margin-bottom:18px; animation:lineGrow 0.6s ease forwards 0.15s; }
  @keyframes lineGrow{ to{ height:36px; } }
  #timeskipText{
    color:var(--text-main); font-size:26px; letter-spacing:0.12em;
    opacity:0; animation:cardTextIn 0.6s ease forwards 0.3s; text-align:center;
  }
  @keyframes cardFade{ from{opacity:0;} to{opacity:1;} }
  @keyframes cardTextIn{ from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);} }

  #charLayer{
    position:relative; z-index:2; flex:1; display:flex; align-items:flex-end; justify-content:center;
    gap:24px; padding:24px; flex-wrap:wrap;
  }
  .charBadge{
    display:flex; flex-direction:column; align-items:center; gap:6px;
    animation:badgeIn 0.35s ease;
    filter:drop-shadow(0 4px 12px rgba(0,0,0,0.6));
  }
  @keyframes badgeIn{ from{opacity:0; transform:translateY(12px);} to{opacity:1; transform:translateY(0);} }
  .charCircle{
    width:64px; height:64px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-size:22px; font-weight:700; color:#fff;
    border:2px solid rgba(255,255,255,0.25);
  }
  .charName{ font-size:12px; color:var(--text-dim); letter-spacing:0.05em; }
  .charExpr{ font-size:10px; color:var(--text-dim); opacity:0.7; }

  #topBar{
    position:relative; z-index:3; display:flex; justify-content:space-between; align-items:center;
    padding:10px 16px; background:linear-gradient(to bottom, rgba(0,0,0,0.55), transparent);
  }
  #stats{ display:flex; gap:14px; flex-wrap:wrap; }
  .statChip{
    display:flex; flex-direction:column; align-items:flex-start; gap:2px; min-width:64px;
  }
  .statChip .label{ font-size:10px; color:var(--text-dim); }
  .statChip .barTrack{ width:64px; height:5px; background:rgba(255,255,255,0.12); border-radius:3px; overflow:hidden; }
  .statChip .barFill{ height:100%; background:var(--accent); transition:width 0.4s ease, background 0.4s ease; }
  .statChip .val{ font-size:10px; color:var(--text-main); }

  #inventory{ display:flex; gap:8px; align-items:center; }
  .itemChip{
    font-size:11px; padding:4px 8px; border-radius:12px;
    background:rgba(217,180,92,0.15); border:1px solid var(--gold); color:var(--gold);
  }
  #debugToggle{
    font-size:10px; color:var(--text-dim); background:none; border:1px solid rgba(255,255,255,0.2);
    border-radius:4px; padding:3px 6px; cursor:pointer;
  }

  #toasts{ position:absolute; top:56px; left:50%; transform:translateX(-50%); z-index:6; display:flex; flex-direction:column; gap:4px; align-items:center; pointer-events:none;}
  .toast{
    background:rgba(0,0,0,0.75); border:1px solid rgba(255,255,255,0.15); border-radius:6px;
    padding:5px 12px; font-size:12px; color:var(--text-main); animation:toastIn 2.6s ease forwards;
  }
  @keyframes toastIn{ 0%{opacity:0; transform:translateY(-6px);} 12%{opacity:1; transform:translateY(0);} 80%{opacity:1;} 100%{opacity:0;} }

  #panel{
    position:relative; z-index:4; background:var(--bg-panel);
    border-top:1px solid rgba(255,255,255,0.08);
    padding:16px 22px 20px; min-height:150px;
    backdrop-filter: blur(2px);
  }
  #speaker{ font-size:13px; color:var(--accent); letter-spacing:0.08em; margin-bottom:6px; height:16px; }
  #speaker.narr{ color:var(--text-dim); font-style:italic; }
  #speaker.think{ color:#8fb4d9; font-style:italic; }
  #textbox{ font-size:16px; line-height:1.65; min-height:52px; cursor:pointer; }
  #textbox.narr{ color:var(--text-dim); font-style:italic; }
  #textbox.think{ color:#a9c4e0; font-style:italic; }
  #advanceHint{ text-align:right; font-size:11px; color:var(--text-dim); margin-top:8px; opacity:0.7; }

  #choices{ display:flex; flex-direction:column; gap:8px; margin-top:6px; }
  .choiceBtn{
    text-align:left; padding:10px 14px; background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.18); border-radius:6px; color:var(--text-main);
    font-family:inherit; font-size:14px; cursor:pointer; transition:all 0.15s ease;
  }
  .choiceBtn:hover{ background:rgba(185,140,255,0.14); border-color:var(--accent); transform:translateX(3px); }

  #endScreen{
    position:absolute; inset:0; z-index:10; background:rgba(0,0,0,0.94);
    display:none; flex-direction:column; align-items:center; justify-content:center; gap:18px; text-align:center; padding:24px;
  }
  #endScreen.show{ display:flex; }
  #endScreen h2{ font-size:22px; color:var(--gold); letter-spacing:0.05em; }
  #endScreen p{ color:var(--text-dim); max-width:480px; font-size:13px; }
  #restartBtn, #factLink{
    padding:10px 22px; background:none; border:1px solid var(--accent); color:var(--accent);
    border-radius:6px; cursor:pointer; font-family:inherit; font-size:14px; text-decoration:none; display:inline-block;
  }
  #restartBtn:hover, #factLink:hover{ background:rgba(185,140,255,0.12); }
  #factLink{ border-color:var(--gold); color:var(--gold); }
  #endButtons{ display:flex; gap:10px; }

  #debugPanel{
    position:absolute; top:0; right:0; width:280px; height:100%; z-index:20;
    background:rgba(0,0,0,0.92); border-left:1px solid rgba(255,255,255,0.15);
    padding:14px; font-size:11px; color:#9d94a8; overflow-y:auto; display:none;
  }
  #debugPanel.show{ display:block; }
  #debugPanel h3{ color:var(--accent); font-size:12px; margin-bottom:6px; }
  #debugPanel .row{ margin-bottom:10px; }
  #debugPanel button{ font-size:10px; margin:2px; padding:3px 6px; cursor:pointer; }
</style>
</head>
<body>
<div id="stage">
  <div id="bg"></div>
  <div id="flash"></div>
  <div id="transition"></div>
  <div id="timeskipCard"><div><div class="line"></div><div id="timeskipText"></div></div></div>
  <div id="topBar">
    <div id="stats"></div>
    <div style="display:flex; align-items:center; gap:10px;">
      <div id="inventory"></div>
      <button id="debugToggle">DEBUG</button>
    </div>
  </div>
  <div id="toasts"></div>
  <div id="charLayer"></div>
  <div id="panel">
    <div id="speaker"></div>
    <div id="textbox">클릭해서 시작</div>
    <div id="choices"></div>
    <div id="advanceHint">클릭 / Space ▶</div>
  </div>
  <div id="endScreen">
    <h2 id="endTitle"></h2>
    <p id="endDesc"></p>
    <div id="endButtons">
      <button id="restartBtn">다시 시작</button>
      <a id="factLink" href="#" target="_blank" rel="noopener" style="display:none;">진짜 역사 보기 →</a>
    </div>
  </div>
  <div id="debugPanel">
    <h3>DEBUG</h3>
    <div class="row" id="dbgScene"></div>
    <div class="row" id="dbgStats"></div>
    <div class="row" id="dbgFlags"></div>
    <div class="row" id="dbgItems"></div>
    <div class="row" id="dbgChoices"></div>
    <div class="row"><b>빠른 이동</b><br/><div id="dbgJump"></div></div>
  </div>
</div>

<script>
const DATA = ${JSON.stringify(DATA)};

const BG_STYLE = {
  'bg_black.jpg': '#000',
  'bg_salem_meetinghouse_interior.jpg': 'radial-gradient(ellipse at center, #3a2a1c 0%, #17120c 100%)',
  'bg_salem_meetinghouse_interior_empty.jpg': 'radial-gradient(ellipse at center, #2c2418 0%, #14100a 100%)',
  'bg_salem_meetinghouse_exterior.jpg': 'linear-gradient(180deg, #cbd6c9 0%, #8fa088 60%, #5c6b56 100%)',
  'bg_salem_house_yard.jpg': 'linear-gradient(180deg, #d9c98f 0%, #a68d5c 60%, #6b5a3a 100%)',
  'bg_salem_house_night.jpg': 'radial-gradient(ellipse at top, #1a2233 0%, #05070c 100%)',
  'bg_salem_village_street.jpg': 'linear-gradient(180deg, #a7ab97 0%, #6f7460 100%)',
  'bg_salem_clerks_office_exterior.jpg': 'linear-gradient(180deg, #857c6c 0%, #4a463c 100%)',
  'bg_salem_jail_holding.jpg': 'radial-gradient(ellipse at center, #2b2b2b 0%, #0a0a0a 100%)',
  'bg_salem_jail_cell.jpg': 'radial-gradient(ellipse at center, #201f22 0%, #060506 100%)',
  'bg_salem_interrogation_room.jpg': 'radial-gradient(ellipse at 50% 30%, #3c2b18 0%, #0e0a05 100%)',
  'bg_salem_courthouse.jpg': 'radial-gradient(ellipse at top, #4a2a20 0%, #170d0a 100%)',
  'bg_gallows.jpg': 'radial-gradient(ellipse at 50% 20%, #3a1414 0%, #050202 100%)',
  'bg_field_pressing.jpg': 'linear-gradient(180deg, #8b8b83 0%, #45443e 100%)',
};
function bgStyleFor(name){ return BG_STYLE[name] || 'linear-gradient(160deg,#2a2a2a,#0a0a0a)'; }

const CHAR_COLOR = {
  orphea:'#8a4fd9', mary:'#c99a4a', corwin:'#7a2e2e', abigail:'#c9b3c2', marshal:'#5a6270'
};
const SPEAKER_NAME = {
  ORPHEA:'오르페아', MARY:'메리', CORWIN:'코윈', ABIGAIL:'아비게일', MARSHAL:'마샬',
  SON:'아이', SARAH:'세라', PLAYER:'당신', '???':'???'
};

const CHOICE_STAGE_MAP = {
  stage1_entry_03: 'stage1_choice',
  stage2_01: 'stage2_choice',
  stage3_01: 'stage3_choice',
  final_main: 'final_choice'
};

// ---------- 상태 ----------
const sceneById = new Map(DATA.scenes.map((s,i)=>[s.id,{scene:s, idx:i}]));
let state = null;

function freshState(){
  return {
    sceneId: DATA.scenes[0].id,
    lineIdx: 0,
    stats: {...DATA.statsInitial},
    items: new Set(),
    flags: new Set(),
    choices: {}, // stage1_choice 등
    visibleChars: new Set(),
    currentBg: null,
    showingTimeskip: false,
    lastLine: null,
    ended: false
  };
}

// ---------- 조건 평가 ----------
function evalCond(cond){
  const clauses = cond.split(/\\sAND\\s/);
  return clauses.every(c => evalClause(c.trim()));
}
function evalClause(c){
  if (c === 'no_escape'){
    return !state.items.has('confession_strategy') && !state.items.has('land_deed_info');
  }
  let m;
  if ((m = c.match(/^NOT\\s+(\\S+)$/))) return !truthy(m[1]);
  if ((m = c.match(/^(\\w+)\\s+IN\\s*\\[(.+)\\]$/))){
    const list = m[2].split(',').map(x=>x.trim());
    return list.includes(String(state.choices[m[1]] ?? ''));
  }
  if ((m = c.match(/^(\\w+)\\s*==\\s*(\\w+)$/))){
    return String(state.choices[m[1]] ?? '') === m[2];
  }
  if ((m = c.match(/^(정신력|평판|신앙|법적방어력)\\s*(<=|>=|<|>)\\s*(-?\\d+)$/))){
    const v = state.stats[m[1]] ?? 0; const n = parseInt(m[3],10);
    switch(m[2]){ case '<=': return v<=n; case '>=': return v>=n; case '<': return v<n; case '>': return v>n; }
  }
  return truthy(c);
}
function truthy(name){ return state.flags.has(name); }

// ---------- 렌더 유틸 ----------
const $ = sel => document.querySelector(sel);
function toast(msg){
  const el = document.createElement('div'); el.className='toast'; el.textContent=msg;
  $('#toasts').appendChild(el);
  setTimeout(()=>el.remove(), 2700);
}
function renderStats(){
  const box = $('#stats'); box.innerHTML='';
  for (const label of DATA.statLabels){
    const v = state.stats[label];
    const init = DATA.statsInitial[label] || 100;
    const pct = Math.max(0, Math.min(100, Math.round((v/Math.max(init,100))*100)));
    const chip = document.createElement('div'); chip.className='statChip';
    chip.innerHTML = \`<span class="label">\${label}</span><div class="barTrack"><div class="barFill" style="width:\${pct}%"></div></div><span class="val">\${v}</span>\`;
    box.appendChild(chip);
  }
}
function renderInventory(){
  const box = $('#inventory'); box.innerHTML='';
  for (const id of state.items){
    const chip = document.createElement('div'); chip.className='itemChip'; chip.textContent = DATA.itemLabels[id] || id;
    box.appendChild(chip);
  }
}
function renderChars(){
  const layer = $('#charLayer'); layer.innerHTML='';
  for (const key of state.visibleChars){
    const [name, expr] = key.split(' ');
    const color = CHAR_COLOR[name] || '#555';
    const badge = document.createElement('div'); badge.className='charBadge';
    badge.innerHTML = \`<div class="charCircle" style="background:\${color}">\${name[0].toUpperCase()}</div><div class="charName">\${SPEAKER_NAME[name.toUpperCase()] || name}</div><div class="charExpr">\${expr||''}</div>\`;
    layer.appendChild(badge);
  }
}
function flashEffect(){
  const f = $('#flash'); f.classList.remove('active'); void f.offsetWidth; f.classList.add('active');
}
function transitionEffect(){
  const t = $('#transition'); t.classList.remove('active'); void t.offsetWidth; t.classList.add('active');
}
function setBg(name){ $('#bg').style.background = bgStyleFor(name); }
function showTimeskip(text){
  state.showingTimeskip = true;
  $('#timeskipText').textContent = text;
  $('#timeskipCard').classList.add('show');
  $('#choices').innerHTML=''; $('#advanceHint').style.visibility='hidden';
}
function hideTimeskip(){
  state.showingTimeskip = false;
  $('#timeskipCard').classList.remove('show');
}

// ---------- 라인 처리 ----------
function currentScene(){ return sceneById.get(state.sceneId).scene; }

function gotoScene(id){
  if (!state.history) state.history = [];
  state.history.push(id);
  state.sceneId = id; state.lineIdx = 0;
}

function runUntilBlocking(){
  while(true){
    const entry = sceneById.get(state.sceneId);
    if (!entry){ showEnd('오류', '씬을 찾을 수 없습니다: '+state.sceneId); return; }
    const scene = entry.scene;

    if (state.lineIdx >= scene.lines.length){
      // 폴스루: 다음 씬으로
      if (entry.idx + 1 < DATA.scenes.length){
        gotoScene(DATA.scenes[entry.idx+1].id);
        continue;
      } else { showEnd('종료', '스크립트 끝'); return; }
    }

    const l = scene.lines[state.lineIdx];

    if (l.t === 'IF'){
      if (!evalCond(l.cond)){
        // ENDIF까지 스킵
        let depth = 1; let j = state.lineIdx+1;
        while (j < scene.lines.length && depth>0){
          if (scene.lines[j].t==='IF') depth++;
          if (scene.lines[j].t==='ENDIF') depth--;
          j++;
        }
        state.lineIdx = j; continue;
      } else { state.lineIdx++; continue; }
    }
    if (l.t === 'ENDIF'){ state.lineIdx++; continue; }

    if (l.t === 'BG'){
      // 배경이 실제로 바뀌면(장소/시간 전환) 캐릭터 배지를 정리하고 짧은 암전 트랜지션을 넣는다.
      // 대본에 HIDE가 누락된 경우가 있어(예: 아비게일) 장소 전환을 신뢰 가능한 정리 시점으로도 삼는다.
      if (l.v !== state.currentBg){ state.visibleChars.clear(); renderChars(); if (state.currentBg !== null) transitionEffect(); }
      state.currentBg = l.v;
      setBg(l.v); state.lineIdx++; continue;
    }
    if (l.t === 'BGM'){ toast('♪ '+l.v); state.lineIdx++; continue; }
    if (l.t === 'SFX'){ toast('🔊 '+l.v); state.lineIdx++; continue; }
    if (l.t === 'SHOW'){
      if (l.v === '검은 형체'){ flashEffect(); }
      else {
        const name = l.v.split(' ')[0];
        for (const k of [...state.visibleChars]) if (k.split(' ')[0]===name) state.visibleChars.delete(k);
        state.visibleChars.add(l.v); renderChars();
      }
      state.lineIdx++; continue;
    }
    if (l.t === 'HIDE'){
      if (l.v !== '검은 형체'){
        for (const k of [...state.visibleChars]) if (k.split(' ')[0]===l.v) state.visibleChars.delete(k);
        renderChars();
      }
      state.lineIdx++; continue;
    }
    if (l.t === 'STAT'){
      state.stats[l.stat] = (state.stats[l.stat]||0) + l.delta;
      toast(\`\${l.stat} \${l.delta>0?'+':''}\${l.delta}\`);
      renderStats();
      state.lineIdx++; continue;
    }
    if (l.t === 'ITEM_GET'){ state.items.add(l.v); toast('입수: '+(DATA.itemLabels[l.v]||l.v)); renderInventory(); state.lineIdx++; continue; }
    if (l.t === 'ITEM_USE'){ toast('사용: '+(DATA.itemLabels[l.v]||l.v)); state.lineIdx++; continue; }
    if (l.t === 'ITEM_LOSE'){ state.items.delete(l.v); toast('상실: '+(DATA.itemLabels[l.v]||l.v)); renderInventory(); state.lineIdx++; continue; }
    if (l.t === 'FLAG_SET'){ state.flags.add(l.v); state.lineIdx++; continue; }
    if (l.t === 'GOTO'){ gotoScene(l.v); continue; }

    if (l.t === 'TIMESKIP'){ showTimeskip(l.v); return; }
    if (l.t === 'TEXT'){ renderText(l); return; }
    if (l.t === 'CHOICE'){ renderChoices(l); return; }

    // UNKNOWN 등은 건너뜀
    state.lineIdx++;
  }
}

function renderText(l){
  const speakerEl = $('#speaker'); const textEl = $('#textbox');
  $('#choices').innerHTML='';
  speakerEl.className=''; textEl.className='';
  if (l.speaker === 'NARR'){ speakerEl.textContent=''; speakerEl.className='narr'; textEl.className='narr'; }
  else if (l.speaker === 'THINK'){ speakerEl.textContent='속마음'; speakerEl.className='think'; textEl.className='think'; }
  else { speakerEl.textContent = SPEAKER_NAME[l.speaker] || l.speaker; }
  textEl.textContent = l.text;
  $('#advanceHint').textContent = '클릭 / Space ▶';
  $('#advanceHint').style.visibility='visible';
}

function renderChoices(l){
  $('#textbox').textContent=''; $('#speaker').textContent=''; $('#advanceHint').style.visibility='hidden';
  const box = $('#choices'); box.innerHTML='';
  const stageVar = CHOICE_STAGE_MAP[state.sceneId];
  for (const o of l.options){
    if (o.req && !state.items.has(o.req)) continue; // [REQ] 미보유 시 숨김
    const btn = document.createElement('button'); btn.className='choiceBtn'; btn.textContent = o.text;
    btn.onclick = ()=>{
      if (stageVar) state.choices[stageVar] = o.id;
      gotoScene(o.target);
      runUntilBlocking();
      renderDebug();
    };
    box.appendChild(btn);
  }
}

function showEnd(title, desc, factSlug){
  state.ended = true;
  $('#endTitle').textContent = title; $('#endDesc').textContent = desc;
  const link = $('#factLink');
  if (factSlug){
    link.href = FACT_BASE_URL + factSlug;
    link.style.display = 'inline-block';
  } else {
    link.style.display = 'none';
  }
  $('#endScreen').classList.add('show');
}

// 사망/엔딩 → orpheaarchive.com 팩트 아카이브 앵커. 에피소드 완성 후 실제 URL 확인할 것.
const FACT_BASE_URL = 'https://orpheaarchive.com/archive/salem-witch-trials-1692/#';

// game_over/epilogue 씬 도달 시 엔딩 화면으로 전환
// scenario.json endings는 result_endpoint 기반이라 엔진에서는 간단히 game_over 진입 시점의 최근 서사로 타이틀 추정
function checkEndingReached(){
  if (state.sceneId === 'game_over'){
    let label = '기록 종료';
    let factSlug = null;
    // 최근 지나온 씬 흔적 + 최종 상태로 엔딩 라벨 추정 (디버그/QA 편의용 — 실제 서사 판정은 대본이 함)
    if (state.choices.final_choice === 'A') { label = '사망 — 결백 주장'; factSlug = 'confess-to-survive'; }
    else if (state.choices.final_choice === 'D') { label = '사망 — 재판 거부 (프레싱)'; factSlug = 'peine-forte-et-dure'; }
    else if (state.choices.stage2_choice === 'D') { label = '사망 — 고발자 반박'; factSlug = 'accusing-the-accusers'; }
    else if ((state.history||[]).includes('stage2_overeat')) { label = '사망 — 맥각 중독'; factSlug = 'ergot-poisoning'; }
    else if (state.choices.final_choice === 'C') { label = '퍼펙트 엔딩'; factSlug = 'property-motive'; }
    else if (state.choices.final_choice === 'B'){
      label = (state.stats['정신력'] <= 50) ? '일반생존 (오염 — 메리 지목)' : '일반생존 엔딩';
      factSlug = 'confess-to-survive';
    }
    showEnd(label, '기록 종료. 새로운 데이터 확보.', factSlug);
    return true;
  }
  return false;
}

function advance(){
  if (state.ended) return;
  if (state.showingTimeskip){
    hideTimeskip();
    state.lineIdx++; runUntilBlocking();
    if (checkEndingReached()) return;
    renderDebug();
    return;
  }
  const scene = currentScene();
  const l = scene.lines[state.lineIdx];
  if (l && l.t === 'TEXT'){ state.lineIdx++; runUntilBlocking(); }
  if (checkEndingReached()) return;
  renderDebug();
}

document.getElementById('panel').addEventListener('click', (e)=>{
  if (e.target.closest('.choiceBtn')) return;
  advance();
});
document.getElementById('timeskipCard').addEventListener('click', advance);
document.addEventListener('keydown', (e)=>{ if (e.code==='Space') advance(); });
document.getElementById('restartBtn').addEventListener('click', start);

// ---------- 디버그 패널 ----------
document.getElementById('debugToggle').addEventListener('click', ()=>{
  $('#debugPanel').classList.toggle('show');
  renderDebug();
});
function renderDebug(){
  if (!$('#debugPanel').classList.contains('show')) return;
  $('#dbgScene').innerHTML = '<b>씬</b>: '+state.sceneId+' (line '+state.lineIdx+')';
  $('#dbgStats').innerHTML = '<b>스탯</b><br/>'+Object.entries(state.stats).map(([k,v])=>k+': '+v).join('<br/>');
  $('#dbgFlags').innerHTML = '<b>플래그</b>: '+[...state.flags].join(', ');
  $('#dbgItems').innerHTML = '<b>아이템</b>: '+[...state.items].join(', ');
  $('#dbgChoices').innerHTML = '<b>선택 기록</b><br/>'+Object.entries(state.choices).map(([k,v])=>k+'='+v).join('<br/>');
  const jumpBox = $('#dbgJump'); jumpBox.innerHTML='';
  for (const target of ['stage1_entry_01','stage2_entry','stage3_entry','final_entry','final_A','final_B','final_C','final_D','stage2_overeat','stage2_D']){
    const b = document.createElement('button'); b.textContent = target;
    b.onclick = ()=>{ gotoScene(target); runUntilBlocking(); if(!checkEndingReached()) renderDebug(); };
    jumpBox.appendChild(b);
  }
}

// ---------- 시작 ----------
function start(){
  state = freshState();
  $('#endScreen').classList.remove('show');
  renderStats(); renderInventory(); renderChars();
  $('#textbox').textContent = ''; $('#speaker').textContent='';
  runUntilBlocking();
  if (!checkEndingReached()) renderDebug();
}
start();
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'game.html'), html, 'utf8');
console.log('game.html 생성 완료: ' + path.join(__dirname, '..', 'game.html'));
