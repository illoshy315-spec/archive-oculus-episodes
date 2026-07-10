# Assets

`asset_manifest.md`에 나온 파일명 그대로 이 폴더 구조에 넣고 `node build/generate_game.js`를 다시 실행하면
자동으로 game.html에 반영됩니다. 없는 파일은 기존 플레이스홀더(그라데이션/이니셜 배지/무음+토스트)로 계속 표시되므로
부분적으로만 채워도 안전합니다.

- `bg/` — 배경 이미지. 파일명은 매니페스트 그대로 (예: `bg_salem_courthouse.jpg`). jpg/jpeg/png/webp 지원.
- `bgm/` — 배경음악. 확장자만 붙이면 됨 (예: `bgm_court_low.mp3`). mp3/ogg 지원.
- `sfx/` — 효과음. 확장자만 붙이면 됨 (예: `sfx_wood_creak.mp3`). mp3/ogg/wav 지원.
- `portraits/` — 캐릭터 초상화. "이름 표정"의 공백을 밑줄로 바꾼 이름 (예: `abigail default` → `abigail_default.png`). png/webp 지원.
  ("검은 형체"는 실제 캐릭터가 아니라 화면 플래시 연출이라 초상화 대상 아님.)
