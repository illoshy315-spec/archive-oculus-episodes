// parse_vn.js — vn_script.md → scenes.json (Archive Oculus VN 파서)
// 사용법: node parse_vn.js <vn_script.md path> <output.json path>
const fs = require('fs');

const inPath = process.argv[2];
const outPath = process.argv[3];
const raw = fs.readFileSync(inPath, 'utf8');
// 하단 주석 블록(<!-- ... -->) 제거
const body = raw.replace(/<!--[\s\S]*?-->/g, '');

const lines = body.split(/\r?\n/);

const scenes = [];
let cur = null;

function pushLine(obj) {
  if (!cur) return;
  cur.lines.push(obj);
}

for (let raw_i = 0; raw_i < lines.length; raw_i++) {
  const line = lines[raw_i].trim();
  if (line === '') continue;

  if (line.startsWith('SCENE:')) {
    cur = { id: line.slice(6).trim(), lines: [] };
    scenes.push(cur);
    continue;
  }
  if (line === 'END_SCENE') { cur = null; continue; }
  if (!cur) continue;

  if (line.startsWith('BG:'))   { pushLine({ t: 'BG', v: line.slice(3).trim() }); continue; }
  if (line.startsWith('BGM:'))  { pushLine({ t: 'BGM', v: line.slice(4).trim() }); continue; }
  if (line.startsWith('SFX:'))  { pushLine({ t: 'SFX', v: line.slice(4).trim() }); continue; }
  if (line.startsWith('SHOW:')) { pushLine({ t: 'SHOW', v: line.slice(5).trim() }); continue; }
  if (line.startsWith('HIDE:')) { pushLine({ t: 'HIDE', v: line.slice(5).trim() }); continue; }
  if (line.startsWith('STAT:')) {
    const m = line.slice(5).trim().match(/^(\S+)\s*([+-]\d+)$/);
    if (m) pushLine({ t: 'STAT', stat: m[1], delta: parseInt(m[2], 10) });
    continue;
  }
  if (line.startsWith('ITEM_GET:'))  { pushLine({ t: 'ITEM_GET',  v: line.slice(9).trim() }); continue; }
  if (line.startsWith('ITEM_USE:'))  { pushLine({ t: 'ITEM_USE',  v: line.slice(9).trim() }); continue; }
  if (line.startsWith('ITEM_LOSE:')) { pushLine({ t: 'ITEM_LOSE', v: line.slice(10).trim() }); continue; }
  if (line.startsWith('CLUE_GET:'))  { pushLine({ t: 'CLUE_GET',  v: line.slice(9).trim() }); continue; }
  if (line.startsWith('FLAG_SET:'))  { pushLine({ t: 'FLAG_SET',  v: line.slice(9).trim() }); continue; }
  if (line.startsWith('TIMESKIP:')) { pushLine({ t: 'TIMESKIP', v: line.slice(9).trim() }); continue; }
  if (line.startsWith('GOTO:'))      { pushLine({ t: 'GOTO', v: line.slice(5).trim() }); continue; }
  if (line.startsWith('IF:'))        { pushLine({ t: 'IF', cond: line.slice(3).trim() }); continue; }
  if (line === 'ENDIF')              { pushLine({ t: 'ENDIF' }); continue; }

  if (line.startsWith('CHOICE:')) {
    const opts = [];
    let j = raw_i + 1;
    while (j < lines.length) {
      const cl = lines[j].trim();
      if (cl === '' ) { j++; continue; }
      const m = cl.match(/^([A-Z]):\s*"(.*)"\s*→\s*(\S+?)(?:\s*\[REQ:\s*([^\]]+)\])?$/);
      if (!m) break;
      opts.push({ id: m[1], text: m[2], target: m[3], req: m[4] ? m[4].trim() : null });
      j++;
    }
    pushLine({ t: 'CHOICE', options: opts });
    raw_i = j - 1;
    continue;
  }

  // 대사/내레이션: TAG: "..." 또는 TAG: ...(대사 아닌 지문, 드묾)
  const dm = line.match(/^([A-Z?][A-Z_?]*):\s*"(.*)"$/);
  if (dm) { pushLine({ t: 'TEXT', speaker: dm[1], text: dm[2] }); continue; }

  // 인식 안 되는 라인 (오탈자 등) — raw로 보존, 검증기가 잡음
  pushLine({ t: 'UNKNOWN', raw: line });
}

fs.writeFileSync(outPath, JSON.stringify(scenes, null, 2), 'utf8');
console.log(`파싱 완료: 씬 ${scenes.length}개 → ${outPath}`);
