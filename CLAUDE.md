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
