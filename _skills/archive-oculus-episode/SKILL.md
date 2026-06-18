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
**이 단계에서 대본 쓰지 않는다.**

### STEP 2 — 딥 리서치 + Fact Sheet
`agents/researcher.md` 로드 → 병렬 리서치 에이전트 실행.
`references/steps/step2.md` 로드 후 fact_sheet.md 생성.
끝에 에피소드 스탯 4~6개 설계.

### STEP 3 — 지뢰 설계 + NPC + 분기 골격
`references/steps/step3.md` + `references/npc_card_template.md` 로드.
지뢰 후보 6개 제안 → 사용자가 4개 선택.
NPC 카드 작성. scenario.json 골격 생성.

### STEP 3.5 — 서사 설계 + 복선 연결
`references/steps/step3_5.md` 로드.
복선/아이템/인과관계를 scenario.json에 추가.
**scenario.json 완전 확정 후 잠금 🔒**
사용자 승인 없이 Step 4로 진행 불가.

### STEP 4 — 대본 집필
`references/steps/step4.md` + `references/orphea_voice_guide.md` + `references/harness.md` 로드.
`references/progress_log_template.md`로 파트별 로그 관리.
파트 1부터 순서대로. 파트 완성마다 자체 체크 후 사용자 승인 대기.

### STEP 5 — OSMU 추출
`agents/extractor.md` 로드 → 대본 완성 후 자동 실행.
출력: `script.md` / `shorts_hooks.json` / `web_article.md`

---

## 출력물 구조
```
[에피소드명]/
├── scenario.json       ← 원소스 (내부 설계 도면)
├── fact_sheet.md       ← Step 2 산출물
├── script.md           ← YouTube 롱폼 대본 (7000자+)
├── shorts_hooks.json   ← 숏폼 훅 3종 + 스레드 질문
├── web_article.md      ← 역사 팩트 해설 아티클
└── progress_log.md     ← 집필 진행 로그
```

---

## 브랜드 레퍼런스
- 브랜드/세계관: `references/brand_bible.md`
- 오르페아 캐릭터: `references/orphea_voice_guide.md`
- 집필 수칙: `references/harness.md`
