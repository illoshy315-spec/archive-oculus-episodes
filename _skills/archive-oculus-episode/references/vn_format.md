# 비주얼 노벨 스크립트 포맷 가이드

## 핵심 원칙
- 대사는 한 텍스트박스에 2~3줄 이내
- 오르페아는 내레이터가 아닌 캐릭터로 — 짧고 냉소적인 한마디
- 플레이어의 행동은 선택지로 표현, 지문으로 서술하지 않는다
- 스탯 변화는 UI 알림으로 처리 (대사 안에 섞지 않는다)

---

## 씬 구성 단위

```
[씬 헤더]
SCENE: 씬ID
BG: 배경 이미지 파일명
BGM: 배경음악 (선택)
SFX: 효과음 (선택)

[캐릭터 등장]
SHOW: 캐릭터명 표정
HIDE: 캐릭터명

[대사]
캐릭터명: "대사 내용"
NARR: "화면 전체 나레이션 (최소화)"

[스탯 알림]
STAT: 신앙 -10
STAT: 평판 +5
ITEM_GET: 아이템명
ITEM_USE: 아이템명

[선택지]
CHOICE:
  A: "선택지 텍스트" → 씬ID
  B: "선택지 텍스트" → 씬ID

[씬 전환]
GOTO: 씬ID
END_SCENE
```

---

## 실제 예시 — 세일럼 법정 씬

```
SCENE: court_01
BG: bg_salem_courthouse.jpg
BGM: bgm_tension_low
SFX: sfx_crowd_murmur

SHOW: orphea default
ORPHEA: "법정이군요. 이성이 통하지 않는 공간 중 하나입니다."
HIDE: orphea

SHOW: corwin stern
CORWIN: "피고인 엘리자베스. 악마와 계약한 사실을 인정하십니까?"

SHOW: abigail hysteria
ABIGAIL: "저기 있어요! 저 여자의 유령이 날 조르고 있어요!"
SFX: sfx_abigail_scream

STAT: 법적방어력 -30
STAT: 정신력 -10

SHOW: orphea slight_smile
ORPHEA: "반증 불가능한 증거. 꽤 창의적인 사법 시스템입니다."
HIDE: orphea

CHOICE:
  A: "저는 결백합니다. 물리적 증거를 요구합니다." → court_bad_end
  B: "(법정 바닥으로 무너지며) 맞습니다... 제가 서명했습니다!" → court_confession

END_SCENE

SCENE: court_bad_end
BG: bg_gallows.jpg
BGM: bgm_dark_end
NARR: "결백을 주장한 19명은 전원 교수형에 처해졌다."
SHOW: orphea default
ORPHEA: "역사적으로 인기 있는 자살 루트입니다. 기록 종료."
GOTO: game_over

SCENE: court_confession
BG: bg_salem_courthouse.jpg
SFX: sfx_crowd_gasp
SHOW: corwin calculating
CORWIN: "공범의 이름을 대십시오."
STAT: 법적방어력 +40
SHOW: orphea default
ORPHEA: "비열합니다. 그래서 효과적이죠."
GOTO: stage_3
```

---

## 표정(Expression) 기본 세트

각 캐릭터당 최소 아래 표정 정의:
- `default` — 기본
- `stern` / `angry` — 위협/분노
- `calculating` — 계산적
- `fear` / `hysteria` — 공포/발작 (아비게일 등)
- `slight_smile` — 냉소 (오르페아 전용)

---

## 오르페아 등장 규칙

- 씬 시작 시 짧은 한마디 → HIDE
- 선택지 직전 평가 한마디 → HIDE
- 배드엔딩 시 마무리 한마디
- **절대 긴 설명 금지** — 한 씬에 오르페아 대사 최대 2회

---

## 유튜브 보이스오버 대본과의 관계

vn_script.md 완성 후 extractor가 자동으로:
- 오르페아 대사를 확장하여 나레이션 대본 생성
- 선택지 장면을 "댓글 참여" 포맷으로 변환
- 씬 지시어를 편집 컷 지침으로 변환
