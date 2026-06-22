# Archive Oculus EP.01 — 세일럼 마녀재판
## 비주얼 노벨 스크립트

---

SCENE: opening_cinematic
BG: bg_black.jpg
BGM: bgm_void_hum
SFX: sfx_static_low

NARR: "가죽이 눈을 덮는다. 시야가 까맣게 닫힌다."
NARR: "가죽 냄새. 땀. 무언가 오래된 것이 타는 냄새."
THINK: "헤드셋 무게치고는 좀 무거운데."

SHOW: orphea default
ORPHEA: "Archive Oculus. 역사 생존 시뮬레이션."
ORPHEA: "인스턴스 로드 중."
ORPHEA: "세일럼 마을. 1692년 6월."
ORPHEA: "경고. 이 시뮬레이션에서 침묵은 유죄의 증거입니다."
HIDE: orphea

END_SCENE


SCENE: opening_01
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_murmur_close

NARR: "눈을 뜬다. 예배당 안이다. 사람이 너무 많다."
NARR: "양초 연기가 목을 긁는다. 젖은 울 냄새. 누군가의 팔꿈치가 등을 민다."
THINK: "화질 좋네. 냄새까지 나는 건 좀 과한데."

SHOW: orphea default
ORPHEA: "축하드려요. 1692년 세일럼에 접속하셨습니다."
ORPHEA: "당신은 이 마을의 과부입니다. 강변 농지 200에이커를 가졌고요."
ORPHEA: "6살 아드님이 마당 돌담 곁에서 기다리십니다."
HIDE: orphea

THINK: "내 땅이 있구나. 혼자 사는 여자가. 좋네."

SHOW: orphea slight_smile
ORPHEA: "방금 안심하셨나요. 여기서 그건 위험한 조합입니다."
HIDE: orphea

END_SCENE


SCENE: opening_02
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_breath

NARR: "군중의 시선이 앞쪽 한 곳에 모여 있다."
NARR: "열두어 살쯤 된 소녀. 두 손을 앞에 모으고 고개를 숙이고 있다."
THINK: "조용한 애네. 순해 보이는데."

SHOW: abigail default
SFX: sfx_abigail_gasp
SHOW: abigail vacant
SHOW: abigail hysteria
SFX: sfx_abigail_scream

ABIGAIL: "저기 있어요. 저기—"
ABIGAIL: "저 사람이요. 어젯밤에 제 방에 왔어요."

SFX: sfx_crowd_gasp
NARR: "손가락이 허공을 가리킨다."
NARR: "그 끝이 향한 방향에 당신이 서 있다."
THINK: "나 아니지? 저 손가락, 나 가리키는 거 아니지?"

END_SCENE


SCENE: opening_03
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_shift

NARR: "주변 여성들이 남편 쪽으로 바짝 붙는다. 말 없이. 한 명씩."
THINK: "다들 한 발씩 물러나는데. 나만 남는다."

SHOW: abigail hysteria
ABIGAIL: "쫓아내 주세요. 쫓아내—"
HIDE: abigail

NARR: "벽 쪽 그림자에서 검은 코트 자락이 한 번 스친다. 아무도 돌아보지 않는다."
NARR: "아비게일의 발작이 계속된다. 군중이 한 뼘씩 조여든다."

SHOW: orphea default
ORPHEA: "생존 확률 계산 중."
ORPHEA: "23%. 역사적으로 인기 있는 자살 루트입니다."
HIDE: orphea

GOTO: opening_end
END_SCENE


SCENE: opening_end
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_crowd_dispersing

NARR: "예배당 밖. 군중이 흩어진다. 햇빛이 너무 밝다."
NARR: "돌담 곁에 아이가 서 있다. 작은 돌을 발끝으로 굴리고 있다."
THINK: "끝났다. 그냥 발작하는 애 하나 본 거야. 끝난 거야."

GOTO: stage1_entry
END_SCENE


SCENE: stage1_entry
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_wind_low

NARR: "긴장이 풀리려는 순간, 누군가 팔을 잡는다."

SHOW: mary warm
MARY: "우리끼리만 아는 얘긴데—"
MARY: "안에서 다 봤어요. 그 애가 당신 쪽을 가리켰잖아."

THINK: "본 사람이 또 있구나. 그럼 나만 그렇게 느낀 게 아니었어."
NARR: "메리가 한 걸음 더 다가선다. 따뜻한 손이다. 빠르다."

END_SCENE


SCENE: stage1_entry_02
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_footsteps_passing

SHOW: mary warm
MARY: "이렇게 가만있으면 안 돼요. 탄원서를 써요."
MARY: "서명인이 많을수록 효과 있을 거야. 마을이 당신 편이라는 걸 보여주는 거지."

NARR: "말하는 동안 메리의 손이 쉴 새 없이 움직인다."
NARR: "메리의 시선이 강변 쪽으로 한 번 흘렀다 돌아온다. 말은 없다."
THINK: "다 맞는 말이야. 너무 맞아서 더 빨라."

SFX: sfx_man_footsteps
NARR: "이웃 남성이 지나가며 메리를 흘겨본다."
SHOW: mary frozen
NARR: "메리의 입이 반 박자 멈춘다."
SHOW: mary warm
MARY: "...아무튼, 같이 가요."

END_SCENE


SCENE: stage1_entry_03
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release

NARR: "메리가 아이 쪽으로 걸어간다."
NARR: "주머니에서 건빵을 꺼내 내민다. 아이를 보지는 않는다."
NARR: "건네는 손과 받는 손이 잠깐 겹친다. 메리는 이미 다른 곳을 보고 있다."
THINK: "왜 아까 강변을 봤지. 거긴 우리 땅인데."

SHOW: orphea default
ORPHEA: "친절한 분이군요. 친절은 세일럼에서 가장 비싼 사치품입니다."
HIDE: orphea

CHOICE:
  A: "메리와 함께 탄원서를 써서 아비게일의 증언을 반박한다" → stage1_A_01
  B: "예배를 3주 빠진 것이 생각났다. 지금이라도 성실히 나간다" → stage1_B_01
  C: "이웃집 검은 고양이를 마녀의 사역자로 고발한다" → stage1_C_01

END_SCENE


SCENE: stage1_A_01
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_quill_scratching

NARR: "집무실 문 앞. 서기가 창구에 앉아 있다. 펜이 종이를 긁는다."
SHOW: mary warm
NARR: "메리가 탄원서를 창구 안으로 밀어 넣는다."
THINK: "이름을 적으면, 마을이 내 편이라는 증거가 남는 거야. 합리적이잖아."

SHOW: orphea slight_smile
ORPHEA: "서류에 이름을 남기는 행위. 현대인이 가장 신뢰하는 절차죠."
ORPHEA: "당시 사람들도 그렇게 믿었습니다."
HIDE: orphea

END_SCENE


SCENE: stage1_A_02
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_door_creak_interior

SHOW: mary warm
NARR: "메리가 당신의 팔을 꽉 쥔다."

NARR: "문 너머에서 낮고 느린 목소리가 새어 나온다."
CORWIN: "(문 너머) 서명인 명단을 올려."

SHOW: mary frozen
NARR: "메리가 즉시 팔에서 손을 뗀다. 한 발 물러선다."
HIDE: mary
THINK: "왜 손을 떼. 방금까지 같이 하자고 했잖아."

END_SCENE


SCENE: stage1_A_03
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_quill_stop

NARR: "서기의 펜이 멈추지 않는다. 탄원인 칸이 아닌, 옆 칸에 이름이 적힌다."
THINK: "저 칸은 뭐지. 탄원서면 탄원인 칸에 적어야 하는 거 아닌가."

NARR: "메리는 그 광경을 본다. 놀라지 않는다."

SHOW: orphea default
ORPHEA: "이름 하나가 명단에 올랐습니다. 어떤 명단인지는, 나중에 아시게 됩니다."
HIDE: orphea

STAT: 평판 -30

GOTO: stage1_end
END_SCENE


SCENE: stage1_B_01
BG: bg_salem_meetinghouse_interior_empty.jpg
BGM: bgm_hymn_distant
SFX: sfx_footsteps_hollow

NARR: "다음 예배. 찬송이 끝나고 사람들이 빠져나간다."
NARR: "복도 끝에 당신만 남는다. 발소리가 텅 빈 벽에 부딪힌다."
THINK: "3주 빠진 거, 별일 아닐 줄 알았는데. 여기선 출석부가 곧 신앙심인가 봐."

SFX: sfx_window_rattle
SFX: sfx_map_unfold
NARR: "닫힌 방 창문 너머에서 낮은 목소리. 종이 펼치는 소리."
CORWIN: "(창문 너머) 강변 쪽 땅 주인이 누구지?"

NARR: "발이 멈춘다. 숨을 죽인다."

END_SCENE


SCENE: stage1_B_02
BG: bg_salem_meetinghouse_corridor.jpg
BGM: bgm_hymn_distant
SFX: sfx_finger_tapping_map

NARR: "안에서 다른 목소리가 무어라 대답한다. 너무 작아 들리지 않는다."
NARR: "손가락이 종이를 톡, 톡, 두드린다. 같은 자리를."
THINK: "강변 주인이 누군지를 왜 묻지. 거기 주인은 난데."

SFX: sfx_distant_footsteps_approaching
NARR: "반대편 복도에서 성도 한 명이 걸어온다. 안의 목소리는 멈추지 않는다. 자리를 뜰 수도 없다."

NARR: "성도와 눈이 마주친다. 잠깐."
NARR: "성도가 그냥 지나간다. 아무것도 묻지 않는다."
THINK: "방금 그거, 본 건가. 못 본 척한 건가."

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

NARR: "마을 길. 이웃집 처마 아래 검은 고양이가 눈을 감고 있다."
NARR: "지나가던 사람이 고양이를 보고 황급히 성호를 긋는다."
THINK: "고양이를 신고하면 시선이 저기로 쏠리겠지. 나한테서 멀어지고."

SHOW: orphea slight_smile
ORPHEA: "남에게 손가락을 돌리는 전략. 가장 인간적인 본능입니다."
HIDE: orphea

END_SCENE


SCENE: stage1_C_02
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient
SFX: sfx_crowd_gather

NARR: "고발이 접수된다. 서기가 받아 적는다. 너무 자연스럽게."

SHOW: orphea default
ORPHEA: "고양이가 마녀의 사역자라는 진술. 정식 기록으로 등재되었습니다."
HIDE: orphea

SHOW: townsperson_01 fearful
NARR: "고양이 주인이 입을 연다. 무어라 말하려 한다."
NARR: "주변 시선이 일제히 그쪽으로 쏠린다. 입이 닫힌다."
THINK: "농담인 줄 알았는데. 아무도 안 웃어."

END_SCENE


SCENE: stage1_C_03
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient_quiet

NARR: "예배당 창문 너머로 아비게일이 이쪽을 바라보고 있다."
NARR: "표정이 없다. 발작도, 두 손 모은 기도도 아니다. 그냥 본다."
THINK: "아까 그 발작하던 애가, 지금은 멀쩡히 날 보고 있어."

STAT: 평판 -10

END_SCENE


SCENE: stage1_C_04
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient_quiet

NARR: "골목에서 고양이 주인과 마주친다. 원망의 말은 없다."
NARR: "그 사람이 잠시 하늘을 올려다본다. 한참 뒤에 문을 열고 안으로 들어간다."
NARR: "당신은 그 등을 본다. 문이 닫힌다."

SHOW: orphea default
ORPHEA: "오늘 당신은 한 사람의 차례를 당신보다 앞으로 당겼습니다."
HIDE: orphea

GOTO: stage1_end
END_SCENE


SCENE: stage1_end
BG: bg_salem_village_night.jpg
BGM: bgm_night_wind
SFX: sfx_night_crickets

NARR: "밤. 마을이 조용하다. 창마다 불빛이 하나씩 꺼진다."
NARR: "아이가 잠들어 있다. 작은 숨소리. 그것뿐이다."
THINK: "하루가 갔다. 내일은 좀 나아지겠지."

SHOW: orphea default
ORPHEA: "오늘 하루 기록이 완료됐습니다."
ORPHEA: "역사는 대개 이런 하루들로 채워집니다. 아무도 기억하지 않는 하루들로요."
HIDE: orphea

GOTO: stage2_entry
END_SCENE

---
<!-- S2 이하 집필 예정 -->

<!--
=== 스테이지 리추얼 체크 (오프닝 + 스테이지 1) ===

□ NARR 3줄 이내마다 NPC 대사 또는 신체반응 있는가?
  → 통과. NARR 최장 연속 2줄. 이후 THINK 신체/속마음 또는 NPC 대사 삽입.
    (opening_03, stage1_entry_02 등에서 NARR 2줄 후 즉시 THINK/대사 교차)

□ 세 레이어(NARR/THINK/ORPHEA) 씬마다 교차했는가?
  → 통과. 각 분기 진입·평가 지점마다 ORPHEA 1~2문장.
    전환용 짧은 씬(opening_end, stage1_C_03)은 NARR+THINK 2레이어로 처리,
    직전/직후 씬에서 ORPHEA가 받쳐 파트 단위로 3레이어 교차.

□ 새 NPC 등장 시 1문장 각인했는가?
  → 통과. 아비게일(opening_02 "두 손 모으고 고개 숙인 순한 소녀"),
    메리(stage1_entry "따뜻한 손. 빠르다"), 고양이 주인(THINK로 즉각 관계).

□ 복선·선택지 직전 의문을 NARR로 설명하거나 강조하지 않았는가?
  → 통과. 강변 시선·코트 자락·옆 칸 기재 모두 행동/소품으로만.
    선택지 직전 의문("왜 강변을 봤지")은 THINK로 플레이어가 품게 유도, 정답 미제시.

□ 함정 선택지(A)가 현대 상식으로 맞아 보이는가?
  → 통과. "서명인 많을수록 효과 있다 / 서류에 이름 남기면 안전"은
    현대인에게 합리적. stage1_A_01 THINK로 그 합리성을 강화.

□ 오르페아 금지어 없는가?
  → 통과. 여러분/우리/화이팅/잘하셨습니다/현명/정답/직접경고 없음.

□ land_deed_info 획득 시 오르페아 코멘트 없는가?
  → 통과. stage1_B_02 ITEM_GET 전후 ORPHEA 대사 없음. 조용히 인벤토리 진입.

□ 아비게일 발작 전 눈 초점 소실 — NARR 설명 없이 SHOW 표정으로만인가?
  → 통과. opening_02에서 SHOW: abigail vacant 표정으로만 처리.
    NARR/THINK에 "초점이 비었다" 류 설명 없음.

[복선 심기 로그]
  타입D: 검은 코트 자락(opening_03) — 코윈 미발각, 강조 없음.
  타입B: 메리의 강변 시선(stage1_entry_02) — '강변' 단어 본 씬에서 아무도 발화 안 함.
  타입A: 메리 팔 뗌(stage1_A_02) — 최종관문 증인석에서 회수 예정.
  타입A: 코윈 손가락 두드림 + "강변 주인이 누구지"(stage1_B_01/02) — 최종관문 C에서 회수 예정.
  타입C: 고양이 고발(stage1_C) — 엔딩 에필로그 "13마리 동물 처형"에서 회수 예정.
-->
