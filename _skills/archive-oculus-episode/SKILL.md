---
name: archive-oculus-episode
description: >
  Archive Oculus 역사 생존 시뮬레이션 에피소드를 처음부터 끝까지 제작하는 풀 파이프라인 스킬.
  "Archive Oculus 에피소드 만들어줘", "새 주제로 시작하자", "2차 대전 대본 써줘",
  "세일럼처럼 만들어줘", "역사 시뮬레이션 대본", "오르페아 대본" 등의 요청에 반드시 이 스킬을 사용하라.
  주제 키워드만 줘도 Step 1부터 자동 시작한다. 절대 스킬 없이 직접 대본을 쓰지 마라.
---

# Archive Oculus Episode Pipeline

## 핵심 원칙
- **원소스**: scenario.json이 모든 출력물의 설계 도면이다. 대본보다 먼저 완성된다.
- **길잡이**: 집필 중 항상 scenario.json을 참조한다. 지도 없이 쓰지 않는다.
- **오르페아**: 모든 내레이션은 오르페아의 목소리로. `references/orphea_voice_guide.md` 필수 로드.
- **고증 우선**: 팩트 없으면 쓰지 않는다. 추측은 사료로 뒷받침된 것만.

---

## 파이프라인 순서

### STEP 1 — 주제 발굴
`references/steps/step1.md` 로드 후 실행.
WebSearch로 레딧 5개 서브레딧 탐색. 주제 후보 5개 제안 → 사용자 선택.
**이 단계에서 스크립트 쓰지 않는다.**

### STEP 2 — 딥 리서치 + Fact Sheet
`agents/researcher.md` 로드 → 레딧 5개 + JSTOR + Wikipedia 병렬 탐색.
`references/steps/step2.md` 로드 후 fact_sheet.md 생성 (출처 URL 병기).
끝에 에피소드 스탯 4~6개 설계.

### STEP 3 — 설계 (포맷 → 파트 → 지뢰 → 신분 → NPC → scenario.json)
`references/steps/step3.md` + `references/npc_card_template.md` + `references/choice_types.md` + `references/social_cultural_context.md` 로드.
**순서 엄수**: 포맷 결정 → 파트 구조 확정 → 파트별 지뢰 설계(사회/문화 맥락 반영, 파트당 A/B/C 3개) → 신분 역산 → 고정NPC 등장 여부 → NPC 카드 → scenario.json 골격.

### STEP 3.5 — 서사 설계 + 복선 연결
`references/steps/step3_5.md` 로드.
복선/아이템/인과관계를 scenario.json에 추가.
**scenario.json 완전 확정 후 잠금 🔒**
사용자 승인 없이 Step 4로 진행 불가.

### STEP 4 — 비주얼 노벨 스크립트 집필
`references/steps/step4.md` + `references/orphea_voice_guide.md` + `references/harness.md` + `references/vn_format.md` + `references/production_spec.md` 로드.
분기 단위로 집필 (씬 단위 아님). 선택지마다 완전히 다른 장면 쓰지 않음 — 스탯 변화와 결과만 분기, 공통 텍스트 공유.
분기 완성마다 사용자 승인 대기.

### STEP 4.5 — 화면 프로토타입 (신규)
`references/steps/step4_5.md` 로드.
vn_script.md + scenario.json을 claude.ai에 전달 → Artifact로 프로토타입 제작 → 확정 후 코드 클코에게 전달.

### STEP 5 — 게임 빌드
`references/steps/step5_build.md` 로드.
Step 4.5 prototype.html 기반으로 game.html 빌드. 포맷별 UI 컴포넌트 분기 (법정물/미연시/육성/로그라이크 등).
브라우저에서 바로 실행 가능한 단일 HTML 파일 생성.

### STEP 6 — OSMU 추출
`agents/extractor.md` 로드 → 게임 완성 후 자동 실행.
출력: 유튜브 보이스오버 대본 / shorts_hooks.json / web_article.md

> 유튜브 독립 대본이 필요할 때: `references/steps/step4_youtube.md` 로드.
> 게임 없이 나레이션 영상만 만드는 경우에 사용.

---

## 출력물 구조
```
[에피소드명]/
├── scenario.json        ← 원소스 (내부 설계 도면)
├── fact_sheet.md        ← Step 2 산출물 (출처 URL 포함)
├── vn_script.md         ← 비주얼 노벨 스크립트 (게임 대본)
├── game.html            ← HTML5 게임 빌드 (브라우저 실행)
├── youtube_script.md    ← 보이스오버 대본 (게임 녹화 + 나레이션용)
├── shorts_hooks.json    ← 숏폼 훅 3종
├── web_article.md       ← 역사 팩트 해설 아티클
└── progress_log.md      ← 집필 진행 로그

_reference/              ← 레퍼런스 보관 (삭제 금지)
└── youtube_narration_draft.md  ← 기존 유튜브 나레이션 스타일 초고
```

---

## 브랜드 레퍼런스
- 브랜드/세계관: `references/brand_bible.md`
- **세계관 확장 바이블 (고정NPC 포함)**: `references/world_bible.md` ← 세계관/캐릭터 작업 시 필수
- **고정 NPC 카드 완성본**: `references/fixed_npc_cards.md` ← 오르페아/네피아/역병의사/글리치NPC
- **에피소드 포맷 카탈로그**: `references/episode_formats.md` ← 포맷 선정 및 로드맵 참고
- **제작 세부 명세**: `references/production_spec.md` ← 분량/배드엔딩/표정트리거/BGM/온보딩/리플레이 확정 기준
- **사회/문화 맥락 가이드**: `references/social_cultural_context.md` ← 교육 콘텐츠 설계 원칙. Step 3 필수 로드
- 오르페아 캐릭터: `references/orphea_voice_guide.md`
- 집필 수칙: `references/harness.md`
