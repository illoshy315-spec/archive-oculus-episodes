# Archive Oculus EP.01 — 세일럼 마녀재판
## 비주얼 노벨 스크립트

---

SCENE: opening_cinematic
BG: bg_black.jpg
BGM: bgm_void_hum
SFX: sfx_static_low

NARR: "가죽 냄새. 땀. 무언가 오래된 것이 타는 냄새."
NARR: "손이 무겁다."

SHOW: orphea default
ORPHEA: "Archive Oculus. 역사 생존 시뮬레이션."
ORPHEA: "인스턴스 로드 중."
ORPHEA: "세일럼 마을. 1692년 6월."
ORPHEA: "경고: 이 시뮬레이션에서 침묵은 유죄의 증거입니다."
HIDE: orphea

END_SCENE


SCENE: opening_01
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_murmur_close

NARR: "예배당 안이다. 사람이 너무 많다."
NARR: "양초 연기와 젖은 울 냄새. 누군가의 팔꿈치가 등을 밀어낸다."

SHOW: orphea default
ORPHEA: "세일럼 마을. 당신은 이 마을의 과부 주민입니다."
ORPHEA: "6살 아드님이 마당 돌담 곁에서 기다리고 계십니다."
HIDE: orphea

END_SCENE


SCENE: opening_02
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_breath

NARR: "군중의 시선이 앞쪽 한 곳에 모여 있다."

SHOW: abigail default
SFX: sfx_abigail_gasp
NARR: "아비게일의 눈 초점이 0.5초 비어진다."
SHOW: abigail hysteria
SFX: sfx_abigail_scream

ABIGAIL: "저기 있어요. 저기—"
ABIGAIL: "저 사람이요. 어젯밤에 제 방에 왔어요."

SFX: sfx_crowd_gasp
NARR: "손가락이 허공을 가리킨다."
NARR: "그 방향에 당신이 있다."

END_SCENE


SCENE: opening_03
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_shift

NARR: "주변 여성들이 남편 쪽으로 바짝 붙는다. 말 없이."
NARR: "벽 쪽 그림자에서 검은 코트 자락이 스친다. 아무도 돌아보지 않는다."

SHOW: abigail hysteria
ABIGAIL: "쫓아내 주세요. 쫓아내—"
HIDE: abigail

NARR: "발작이 계속된다. 군중이 조여든다."

SHOW: orphea default
ORPHEA: "현재 생존 확률 계산 중."
ORPHEA: "유감이군요. 썩 좋은 숫자가 아닙니다."
HIDE: orphea

GOTO: opening_end
END_SCENE


SCENE: opening_end
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_crowd_dispersing

NARR: "예배당 밖. 군중이 흩어진다."
NARR: "돌담 곁에 아이가 서 있다. 작은 돌을 발로 차고 있다."

GOTO: stage1_entry
END_SCENE


SCENE: stage1_entry
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_wind_low

NARR: "긴장이 풀리려는 순간, 누군가 팔을 잡는다."

SHOW: mary warm
MARY: "우리끼리만 아는 얘긴데—"
MARY: "안에서 봤어요. 아비게일이 당신 쪽을 가리켰잖아요."

END_SCENE


SCENE: stage1_entry_02
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_footsteps_passing

SHOW: mary warm
MARY: "탄원서예요. 서명인이 많을수록 효과 있을 거야."

NARR: "말하는 동안 메리의 손이 많이 움직인다."
NARR: "메리의 시선이 강변 쪽으로 한 번 이탈한다. 말은 없다."

SFX: sfx_man_footsteps
NARR: "이웃 남성이 지나가며 메리를 흘겨본다."
SHOW: mary frozen
NARR: "메리가 0.5초 굳는다."
SHOW: mary warm

END_SCENE


SCENE: stage1_entry_03
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release

NARR: "아이 쪽으로 걸어가는 메리."
NARR: "건빵을 꺼내 아이에게 내민다. 아이를 보지 않는다."
NARR: "건네는 손과 받는 손이 잠깐 겹친다."
NARR: "메리는 이미 다른 곳을 보고 있다."

NARR: "아까 메리가 강변 쪽을 왜 봤는지 — 아무도 말하지 않았다."

CHOICE:
  A: "메리와 함께 탄원서를 써서 아비게일의 증언을 반박한다" → stage1_A_01
  B: "예배를 3주 빠진 것이 생각나 지금이라도 성실히 나간다" → stage1_B_01
  C: "이웃집 검은 고양이를 마녀의 사역자로 고발한다" → stage1_C_01

END_SCENE


SCENE: stage1_A_01
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_quill_scratching

NARR: "집무실 문 앞. 서기가 창구에 앉아 있다."
NARR: "메리가 탄원서를 밀어 넣는다."

SHOW: mary warm
NARR: "서기가 서류를 받아 목록에 기재한다."
NARR: "플레이어는 그 목록을 볼 수 없다."

END_SCENE


SCENE: stage1_A_02
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_quill_scratching

SHOW: mary warm
NARR: "메리가 팔을 꽉 쥔다."

SFX: sfx_door_creak_interior
NARR: "문 너머에서 낮은 목소리가 들린다."
CORWIN: (문 너머) "서명인 명단을 올려."

SHOW: mary frozen
NARR: "메리가 즉시 손을 뗀다."
HIDE: mary

END_SCENE


SCENE: stage1_A_03
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_quill_stop

NARR: "서기의 펜이 멈추지 않는다."
NARR: "탄원인 칸이 아닌 다른 칸에 이름이 적힌다."

STAT: 평판 -30

NARR: "메리는 놀라지 않는다."

GOTO: stage1_end
END_SCENE


SCENE: stage1_B_01
BG: bg_salem_meetinghouse_interior_empty.jpg
BGM: bgm_hymn_distant
SFX: sfx_footsteps_hollow

NARR: "예배 후. 사람들이 빠져나간다."
NARR: "복도에 플레이어만 남는다."

SFX: sfx_window_rattle
SFX: sfx_map_unfold
NARR: "창문 너머에서 낮은 목소리."

CORWIN: (창문 너머) "강변 쪽 주인이 누구지?"

NARR: "플레이어가 멈춘다."

END_SCENE


SCENE: stage1_B_02
BG: bg_salem_meetinghouse_corridor.jpg
BGM: bgm_hymn_distant
SFX: sfx_distant_footsteps_approaching

NARR: "반대편 복도에서 성도가 걸어온다."
NARR: "코윈의 목소리는 계속된다. 이동도 못 한다."

SFX: sfx_finger_tapping_map
NARR: "손가락이 무언가를 두드리는 소리."

NARR: "성도와 눈이 마주친다."
NARR: "성도가 그냥 지나간다."
NARR: "플레이어는 숨을 참는다."

STAT: 신앙 +20
STAT: 평판 +10
STAT: 정신력 -10
ITEM_GET: land_deed_info

GOTO: stage1_end
END_SCENE


SCENE: stage1_C_01
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient
SFX: sfx_cat_movement

NARR: "이웃집 처마 아래. 검은 고양이가 눈을 감고 있다."
NARR: "지나가던 마을 사람이 성호를 긋는다."

SHOW: townsperson_01 fearful
END_SCENE


SCENE: stage1_C_02
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient
SFX: sfx_crowd_gather

NARR: "고발이 접수된다."
NARR: "서기가 받아 적는다. 너무 자연스럽게."

NARR: "고양이 주인이 말하려 한다."
NARR: "주변 시선이 쏠린다. 입이 닫힌다."

NARR: "아무도 웃지 않는다."

END_SCENE


SCENE: stage1_C_03
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient

SHOW: orphea default
ORPHEA: "고양이를 고발하셨군요. 역사적으로 검증된 방법입니다."
HIDE: orphea

NARR: "예배당 창문 너머로 아비게일이 이쪽을 바라보고 있다."
NARR: "표정이 없다."

STAT: 평판 -10

END_SCENE


SCENE: stage1_C_04
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient_quiet

NARR: "고양이 주인이 골목에서 플레이어와 마주친다."
NARR: "원망 없이 하늘을 본다."
NARR: "한참 후에 안으로 들어간다."
NARR: "플레이어는 그 등을 본다."

GOTO: stage1_end
END_SCENE


SCENE: stage1_end
BG: bg_salem_village_night.jpg
BGM: bgm_night_wind
SFX: sfx_night_crickets

NARR: "밤. 마을이 조용하다."
NARR: "창마다 불빛이 하나씩 꺼진다."

SHOW: orphea default
ORPHEA: "오늘 하루 기록이 완료됐습니다."
ORPHEA: "역사는 대개 이런 하루들로 이루어져 있습니다. 아무도 기억하지 않는."
HIDE: orphea

GOTO: stage2_entry
END_SCENE

---
<!-- S2 이하 집필 예정 -->
