# Archive Oculus — Claude 필수 컨텍스트

## 프로젝트 개요
역사 생존 시뮬레이션. 플레이어가 역사적 위기 속에서 생존하는 2인칭 POV 비주얼 노벨 + 유튜브 채널.
AI 가이드 오르페아(냉소적·독설적 캐릭터)가 안내.

## 제작 순서 (OSMU)
1. VN 스크립트 → 2. HTML5 게임 빌드 → 3. 게임 녹화 + 유튜브 대본 → 4. 숏폼/웹 아티클

## 폴더 구조
```
Archive Oculus/
├── _source_docs/              # 세계관·캐릭터 바이블, 제작 스펙
│   ├── Archive_Oculus_Brand_Bible_v1.md
│   ├── Orphea_Character_Bible_v2.md
│   ├── archive_oculus_production_spec_v1.md
│   ├── archive_oculus_game_pipeline_v1.md
│   └── archive_oculus_episode_formats_v1.md
├── archive_oculus_content_rules_v1.md   # 콘텐츠 규칙 (필수 숙지)
├── ep1. 세일럼 마녀재판/
│   ├── progress_log.md        # 현재 스탯/인벤/파트 진행현황
│   ├── fact_sheet.md
│   ├── npc_cards.md
│   ├── scene_beats_EP01.md
│   └── vn_script.md
└── vn_scene_reference.md
```

## 작업 시작 전 필수 읽기 (에피소드 작업 시)
1. `archive_oculus_content_rules_v1.md` — 미디어별 팩트 노출 원칙
2. `_source_docs/Orphea_Character_Bible_v2.md` — 오르페아 말투·원칙
3. `ep1. 세일럼 마녀재판/progress_log.md` — 현재 스탯/파트 상태

**스킬 사용**: 에피소드 작업은 반드시 `/archive-oculus-episode` 스킬 먼저 실행.

## 오르페아 핵심 원칙
- "설명 금지 → 결과로 말하라"
- 독설에 팩트를 녹여서 전달
- 2인칭 POV 유지 ("당신은")

## VN 집필 불변 규칙 (매 세션 강제 — 스킬 레퍼런스에 상세, 여기 있는 건 절대 누락 금지 항목)
1. **말하는 모든 명명 캐릭터는 SHOW: 이름 표정 / HIDE: 이름으로 감싼다. 오르페아 포함.**
   예외 둘뿐: 익명 ???(스프라이트 없음), BG가 headset인 씬의 오르페아(음성 전용).
   → lint_vn.ps1이 오류로 잡는다 (2026-07-18 검사 추가 — EP02에서 누락 재발한 항목).
2. NARR는 2인칭("당신"), 1인칭은 THINK로만. 태그는 대문자 (NARR/THINK/ORPHEA/PLAYER/???).
3. 오르페아 밀도 곡선: 오프닝~S1 티키타카 자유 → S2 절제 → S3부터 씬당 1회·유머 0.
4. 스테이지 완성마다 lint_vn.ps1 실행 — 오류 0 + 경고 소명 전에는 제출 금지.
5. IF가 읽는 플래그는 반드시 FLAG_SET 태그로 대본에 존재해야 한다.

## Creator Hub (제작 지원 도구, 2026-07-22 신설)
`C:\Users\user\archive-oculus-creator-hub` — 이 콘텐츠 레포와는 분리된 별도 로컬 도구(Node+Express).
`npm start` → `http://localhost:4100`. 에셋 매니저(에셋 누락 대조)·플레이테스터(분기 헤드리스 시뮬레이션)
완성됨 — Step 5 빌드 전에 쓴다 (`references/steps/step5_build.md` 참조). 보이스/영상 파이프라인은 아직
미완성(ElevenLabs 키·voice_id 미확정). 콘텐츠 창작(집필·리서치·팩트체크)은 여기서 하지 않는다 —
그건 여전히 Claude가 스킬 따라 직접 함. `.gemini\antigravity\scratch\archive-oculus-system`(Gemini
자동 집필 시스템)은 별개 물건이며 사용 안 함, 그냥 방치.

## GitHub 레포
- `archive-oculus-episodes`: 에피소드 작업물 전체 (이 폴더)
- 작업 완료 시 자동 push

## 완료 기준 (파트 집필 시)
```
[ ] progress_log.md 스탯/인벤/체크리스트 업데이트
[ ] 미회수 복선 목록 확인
[ ] vn_script.md 업데이트
[ ] git commit + push
```
