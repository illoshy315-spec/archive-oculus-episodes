# Archive Oculus EP.01 — 세일럼 마녀재판
## 비주얼 노벨 스크립트

---

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPENING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE: opening_01
BG: bg_salem_dawn_fog.jpg
BGM: bgm_orphea_theme
SFX: sfx_wind_low

NARR: "1692년 1월. 매사추세츠 세일럼 빌리지."
NARR: "새벽 다섯 시. 아직 해가 뜨지 않았다."

SFX: sfx_crowd_murmur_distant
NARR: "파리스 목사의 집에서 불빛이 새어 나온다."

END_SCENE


SCENE: opening_02
BG: bg_parris_house_interior.jpg
BGM: bgm_orphea_theme
SFX: sfx_fire_crackle

NARR: "방 안에 사람들이 모여 있다."
NARR: "누군가의 목소리가 높아졌다가, 갑자기 끊겼다."

SHOW: abigail default
SFX: sfx_chair_scrape

SHOW: abigail hysteria
SFX: sfx_abigail_scream
ABIGAIL: "아아—! 저기 있어요! 저 여자가 저를 조르고 있어요!"

SFX: sfx_crowd_gasp
SFX: sfx_glass_break

END_SCENE


SCENE: opening_03
BG: bg_parris_house_interior.jpg
BGM: bgm_orphea_theme
SFX: sfx_crowd_murmur

SHOW: abigail hysteria
NARR: "아비게일 윌리엄스, 11세."
NARR: "두 손을 앞에 모으고 항상 고개를 약간 숙이던 아이였다."
NARR: "눈에서 초점이 사라지는 데 0.5초가 걸렸다."

SFX: sfx_abigail_scream
SHOW: abigail default
ABIGAIL: "저기... 저 사람이요. 어젯밤에 제 방에 왔어요."

HIDE: abigail

END_SCENE


SCENE: opening_04
BG: bg_black_screen.jpg
BGM: bgm_orphea_theme_full

NARR: "군중의 웅성거림이 멀어진다."
NARR: "누군가의 비명이 안개 속으로 녹아든다."

SFX: sfx_lantern_flicker

SHOW: orphea default
ORPHEA: "축하드려요. 1692년 세일럼에 접속하셨습니다."
ORPHEA: "생존 확률 23%. 역사적으로 인기 있는 자살 루트입니다."
HIDE: orphea

END_SCENE


SCENE: opening_05
BG: bg_stat_init_screen.jpg
BGM: bgm_orphea_theme

NARR: "엘리자베스. 27세. 과부."
NARR: "강변 농지 200에이커. 아들 하나. 나이 여섯."
NARR: "남편 없는 자산가 여성이란—"

SHOW: orphea slight_smile
ORPHEA: "굶주린 하이에나들에게 가장 뜯어먹기 좋은 고기방패에 불과하죠."
HIDE: orphea

STAT: 신앙 80
STAT: 평판 70
STAT: 법적방어력 30
STAT: 정신력 100

END_SCENE


SCENE: opening_06
BG: bg_salem_street_morning.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_rooster_crow

NARR: "다음 날 아침. 소문은 이미 마을 전체에 퍼져 있었다."
NARR: "아비게일이 발작을 일으켰다. 악마가 그 몸을 빌렸다."
NARR: "이웃들이 당신의 문 앞에서 속삭이는 소리가 들렸다."

SFX: sfx_door_knock_soft

END_SCENE


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAGE 1 — 공동체 / 젠더 / 정보·소문
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE: stage1_01
BG: bg_salem_street_morning.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_wind_low

SHOW: mary default
MARY: "우리끼리만 아는 얘긴데... 이대로 가면 우리 다 끝나."
MARY: "메인 스트리트에서만 벌써 세 명이 이름이 올랐어."

SHOW: mary calculating
MARY: "그 강변 쪽 땅... 아직 네 명의야?"

HIDE: mary

END_SCENE


SCENE: stage1_choice
BG: bg_salem_crossroads.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_wind_low

SHOW: mary default
MARY: "같이 싸우자. 우리가 먼저 움직이면 막을 수 있어."
HIDE: mary

SHOW: orphea default
ORPHEA: "시스템 알림. 중요 선택 이벤트 발생."
HIDE: orphea

CHOICE:
  A: "메리와 함께 탄원서를 써서 아비게일을 거짓말쟁이로 고발한다" → stage1_A_01
  B: "예배에 3주 빠진 것이 생각나 지금이라도 나간다" → stage1_B_01
  C: "이웃집 검은 고양이를 마녀의 사역자로 고발한다" → stage1_C_01

END_SCENE


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAGE 1 — A: 탄원서 (함정)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE: stage1_A_01
BG: bg_mary_house_interior.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_quill_writing

SHOW: mary default
MARY: "우리끼리만 아는 얘긴데... 이걸 제출하면 판사도 못 무시할 거야."
MARY: "사람들이 보면 생각이 바뀔 거라고."

NARR: "탄원서에 서명한다. 잉크가 마르기 전에 마을 게시판에 붙였다."

HIDE: mary

END_SCENE


SCENE: stage1_A_02
BG: bg_salem_street_morning.jpg
BGM: bgm_ep01_theme_tense
SFX: sfx_crowd_murmur

NARR: "다음 날. 탄원서는 찢겨 있었다."
NARR: "서명자 명단이 법원 기록에 올랐다."

SHOW: orphea slight_smile
ORPHEA: "감정적으로는 훌륭합니다. 통계적으로는 끔찍하고요."
ORPHEA: "탄원서는 법적 효력이 없습니다. 공범 목록으로는 유효하지만."
HIDE: orphea

STAT: 평판 -30

GOTO: stage1_end
END_SCENE


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAGE 1 — B: 예배 참석 (탈출구)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE: stage1_B_01
BG: bg_salem_church_exterior.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_church_bell

NARR: "3주 만에 예배당 문을 열었다."
NARR: "나무 의자가 차갑다. 찬송가 소리가 벽을 타고 내려온다."

SHOW: abigail default
NARR: "아비게일이 앞줄에 앉아 있다. 두 손을 앞에 모으고."
NARR: "눈이 마주쳤다. 그 아이는 고개를 숙였다."

HIDE: abigail

STAT: 신앙 +20
STAT: 평판 +10
STAT: 정신력 -10

END_SCENE


SCENE: stage1_B_02
BG: bg_church_corridor_shadow.jpg
BGM: bgm_ep01_theme_tense
SFX: sfx_footsteps_stop

NARR: "예배가 끝났다. 나가려다 멈췄다."
NARR: "측면 복도. 두 남자의 목소리."

SHOW: corwin stern
CORWIN: "지주 여성은 어차피 처형되면 토지가 몰수되지."
CORWIN: "강변 쪽 200에이커. 기소 전에 처리해두면 좋겠어."

SFX: sfx_footsteps_departing
HIDE: corwin

NARR: "코윈 판사. 그가 말한 강변 쪽 200에이커—"
NARR: "당신의 땅이다."

END_SCENE


SCENE: stage1_B_03
BG: bg_elizabeth_house_interior.jpg
BGM: bgm_ep01_theme_tense
SFX: sfx_quill_writing_fast

NARR: "집에 뛰어 들어왔다."
NARR: "아들이 부엌 바닥에 앉아 있다. 여섯 살."
NARR: "손이 떨렸다. 잉크가 번졌다."

SHOW: orphea default
ORPHEA: "꽤 비열한 방법입니다. 그래서 효과적이죠."
HIDE: orphea

NARR: "강변 농지 200에이커 양도 서류. 기소일 이전 날짜."
NARR: "수혜자: 아들. 도장을 찍었다."

ITEM_GET: land_deed_info

GOTO: stage1_end
END_SCENE


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAGE 1 — C: 고양이 고발 (웃긴 선택지)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE: stage1_C_01
BG: bg_salem_street_morning.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_cat_meow

NARR: "이웃집 검은 고양이. 이름은 없다."
NARR: "어젯밤 창문 밖을 서성이던 그 녀석."

SFX: sfx_quill_writing
NARR: "고발장에 '검은 고양이, 사역자 추정'이라 썼다."
NARR: "법원 접수창구 서기가 눈을 깜빡였다. 그래도 접수했다."

END_SCENE


SCENE: stage1_C_02
BG: bg_salem_courthouse_exterior.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_crowd_murmur

SHOW: orphea slight_smile
ORPHEA: "고양이를 고발하셨군요. 역사적으로 검증된 방법입니다."
ORPHEA: "티투바의 증언에도 붉은 고양이, 검은 개가 악마의 사역자로 기록되었죠."
HIDE: orphea

NARR: "고양이 주인이 먼저 심문을 받게 되었다."
NARR: "당신에게는 잠깐의 시간이 생겼다."

STAT: 평판 -10

GOTO: stage1_end
END_SCENE


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAGE 1 — 합류
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE: stage1_end
BG: bg_salem_street_evening.jpg
BGM: bgm_ep01_theme_calm
SFX: sfx_wind_low

NARR: "저녁이 되었다."
NARR: "마을 전체가 조용했다. 조용한 것이 더 무서웠다."

SHOW: orphea default
ORPHEA: "기록 동기화 완료."
ORPHEA: "아직 살아 계시는군요. 흥미롭지는 않습니다만."
HIDE: orphea

GOTO: stage2_entry
END_SCENE
```
