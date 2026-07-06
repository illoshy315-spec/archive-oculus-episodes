# Archive Oculus EP.01 — 세일럼 마녀재판
## 비주얼 노벨 스크립트

---

SCENE: opening_cinematic
BG: bg_black.jpg
BGM: bgm_void_hum
SFX: sfx_static_low

SHOW: orphea default
ORPHEA: "Orphea Archive. 생존 시뮬레이션."
ORPHEA: "인스턴스 로드 중."
NARR: "신경 동기화 수치 88%"
NARR: "98.7%"
NARR: "100.0%"
ORPHEA: "세일럼 마을. 1692년 6월."
ORPHEA: "경고. 이 시뮬레이션에서 침묵은 유죄의 증거입니다."
HIDE: orphea

NARR: "부드러운 가죽이 눈을 덮는다. 시야가 까맣게 닫힌다."
NARR: "가죽 냄새. 땀. 무언가 오래된 것이 타는 냄새."

END_SCENE


SCENE: opening_01
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_murmur_close

NARR: "매캐한 연기냄새가 코를 찌른다. 축축한 땅 내음과 짐승의 냄새에 속이 울렁거린다. 당신은 눈을 뜬다. 실내는 어둡다. 작은 유리조각들이 촘촘히 연결된 창문 사이로 희미한 햇빛이 들어온다. 뿌옇던 시야가 밝아진다. 웅성거리는 소리가 들린다. 낮은 천장, 좁은 실내 공간안에 사람들이 가득 차있다."
NARR: "양초 연기가 목을 긁는다. 젖은 울 냄새. 누군가의 팔꿈치가 등을 민다."
???: "거 밀지 맙시다."
PLAYER: "아, 네 죄송합니다."
NARR: "당신은 머쓱하게 사과하고 자리잡는다. 좁은 공간, 빼곡한 사람들, 작은 단상. 그리고 단상 위의 십자가."
THINK: "여긴 어디지? 무슨 집회라도 하는 것같다."
ORPHEA: "거의 정확합니다. 예배당이거든요."

SHOW: orphea default
ORPHEA: "축하합니다. 당신은 1692년 세일럼에 접속하셨습니다."
ORPHEA: "당신의 이름은 엘리자베스. 3개월 전 남편을 잃은 27세 청교도 여성입니다."
THINK: "뭐? 나 결혼한 기억도 없는데 벌써 이혼했다고?"
ORPHEA: "놀라기는 이릅니다. 애도 딸렸거든요."
THINK: "애? 애가 있다고? 남편은 없다며!"
ORPHEA: "네. 올해 4월에 6살이 된 아드님입니다. 아주 깜찍하고... 귀엽고 사랑스럽답니다. 아, 오늘 아드님은 예배에 참석하지 않으셨군요. 아마 마당 돌담 곁에 있을겁니다."
HIDE: orphea

THINK: "애딸린 과부? 내가? 난 원래..."
NARR: "내가 원래 무엇이었는지, 전혀 생각이 나지 않는다. 머리가 깨질 듯 아프다."
THINK: "게다가 여기가 어디랬지? 이게 뭐야. 뭐 어쩌란 말이야?"

SHOW: orphea slight_smile
ORPHEA: "아, 제가 아직 말씀 안드렸나요? 당신은 그냥 이곳에서 살아남으면 됩니다. 간단하죠?"
THINK: "뭐? 나 과부라며. 애까지 딸렸다며! 혼자서 어떻게 애 키우고 먹고살아?"
ORPHEA: "괜찮아요. 남편은 죽었지만, 그 죽은 남편이 남긴 것이 아주 많으니까."
HIDE: orphea

END_SCENE


SCENE: opening_02
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_breath

NARR: "목사의 설교는 길고 지루하다. 당신은 집중하지 못하고 몸을 이리저리 뒤틀며 눈을 굴린다. 주변의 이웃들은 모두 진지한 얼굴로 설교에 집중하고 있다."
THINK: "와... 무슨 말을 하는거야. 진짜 길다. 목사님 유투브에는 재능 없는듯."
NARR: "한바탕 설교가 마무리되고, 한무리 아이들이 앞으로 나온다. 연단 한편에 줄 맞춰 선다. 사람들의 시선이 그쪽으로 모인다."
NARR: "중앙에 선 아이가 당신을 바라본다. 눈이 마주친다. 당신은 머쓱한 듯 미소짓는다."
THINK: "누구지. 아는 애인가? 아는 척 해야하나?"

SHOW: abigail default
SFX: sfx_abigail_gasp

NARR: "당신과 눈이 마주친 소녀의 얼굴이 사색이 된다. 소녀는 당신의 눈을 피하며 주변을 두리번거린다."

SHOW: abigail vacant
SHOW: abigail hysteria
SFX: sfx_abigail_scream

NARR: "소녀가 공포에 질린 듯 비명을 지르며 몸을 떤다. 눈은 뒤집히고 목에는 핏대가 섰다. 날카로운 비명에 놀란 아이들이 소녀에게서 멀찍이 떨어진다."
ABIGAIL: "저기 있어요! 저기—"
ABIGAIL: "엘리자베스! 어젯밤에 제 방에 왔어요."

SFX: sfx_crowd_gasp
NARR: "손가락이 허공을 가리킨다."
NARR: "그 끝이 향한 방향에 당신이 서 있다."
THINK: "뭐, 뭐야? 이게 무슨 상황이야? 나? 나 아니지? 저 손가락, 나 가리키는 거 아니지?"

END_SCENE


SCENE: opening_03
BG: bg_salem_meetinghouse_interior.jpg
BGM: bgm_crowd_tension
SFX: sfx_crowd_shift

NARR: "어른 둘이 달려나와 소녀를 부축한다. 소녀의 경련은 멎지 않는다. 부축하는 팔이 흔들릴 만큼."
NARR: "웅성거림이 커진다. 시선들이 소녀와 당신 사이를 오간다. 소녀에게 한 번. 당신에게 한 번. 다시 소녀에게."
THINK: "보지 마. 나 보지 마. 쟤를 봐. 아픈 건 쟤잖아."

NARR: "옆에 서 있던 남자가 반 걸음 물러난다. 아까 밀지 말라던 그 남자다."
THINK: "...아까는 밀지 말라며. 지금은 왜 알아서 비켜."

NARR: "목사가 단상을 내리친다. 기도문이 급하게 낭독되고, 예배가 끝난다."
NARR: "사람들이 문 쪽으로 빠져나간다. 당신 주변만 물길처럼 갈라진 채."

END_SCENE


SCENE: opening_04
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_crowd_dispersing

NARR: "밖. 햇빛이 너무 밝다. 눈이 아려서 손차양을 만든다."
NARR: "마당으로 흩어지는 사람들. 아내들이 하나둘 남편 곁으로 붙는다. 말없이. 팔을 끼고. 한 명씩."
THINK: "뭐야, 저건. 나랑 눈도 안 마주치고."

NARR: "낯이 익은 것 같은 여자가 다가온다. 입을 여는가 싶더니, 눈을 내리깔고 지나간다."
NARR: "치맛자락이 스치는 소리만 남는다."
THINK: "방금 나한테 인사하려던 거 아니었어?"

NARR: "개가 짖는다. 아이들 몇이 마당을 가로질러 뛰어간다. 검은 코트의 남자가 서기와 몇 마디를 나누고 마을회관 쪽으로 걸어간다. 우물가에서 두레박 부딪는 소리."
NARR: "바람이 분다. 아무 일도 없는 오후처럼."

END_SCENE


SCENE: opening_05
BG: bg_salem_meetinghouse_exterior.jpg
BGM: bgm_tension_release
SFX: sfx_wind_low

NARR: "돌담 곁에 아이가 서 있다. 작은 돌을 발끝으로 굴리다가, 당신을 발견하고 얼굴이 환해진다."
SON: "엄마!"
NARR: "심장이 한 박자 늦게 뛴다."
THINK: "엄마. ...나더러 엄마래. 뭐라고 대답해야 하지."

SON: "엄마, 이거 봐. 하얀 돌. 새알같이 생겼지."
PLAYER: "...그러네. 진짜 알 같다."
SON: "엄마 주려고 주웠어."
NARR: "조그만 손이 돌을 내민다. 받아 든다. 아이 손에 있던 온기가 돌에 남아 있다."
NARR: "당신은 돌을 주머니에 넣는다. 아이가 씩 웃는다."

SON: "오늘 기도 되게 길었어? 나 담장 세 바퀴나 돌았는데."
PLAYER: "어... 응. 좀 길었어. 가자."
NARR: "아이의 손이 당신 손을 잡는다. 바람. 젖은 빨래 냄새. 아이의 발걸음이 반 박자 빠르다."
THINK: "끝났다. 그냥... 발작하는 애 하나 본 거야. 별일 아닐 거야."

GOTO: stage1_entry_01
END_SCENE


SCENE: stage1_entry_01
BG: bg_salem_house_yard.jpg
BGM: bgm_morning_calm
SFX: sfx_chickens_morning

NARR: "다음 날 아침. 마당. 닭들이 발치에 모여든다."
NARR: "손이 알아서 모이를 뿌린다. 젖은 빨래를 털어 너는 손목의 각도까지. 몸이 이 삶을 기억하고 있다."
THINK: "신기하네. 머리는 하나도 모르겠는데 손은 다 알아."

SFX: sfx_hurried_footsteps
NARR: "빠른 발소리. 치맛자락을 걷어쥔 여자가 마당으로 들어선다. 들어서면서 이미 뒤를 한 번 돌아본다."

SHOW: mary warm
MARY: "엘리자베스."
MARY: "우리끼리만 아는 얘긴데—"
NARR: "숨이 차 있다. 목소리는 속삭임인데 손은 당신 팔을 붙잡는다."
THINK: "누구지. 낯이 익어야 할 것 같은데, 아무것도 안 떠올라."

MARY: "고발장이 들어갔어. 어젯밤에. 퍼트넘 씨 명의로."
PLAYER: "고발장이요? ...누가요? 저를요?"
MARY: "판사들 손에 넘어갔다는 얘기야. 영장에 서명만 하면 끝이야. 빠르면 오늘 밤."
PLAYER: "잠깐만요. 제가 뭘 했는데요? 그 애가 소리 지른 게 다잖아요. 그게 무슨 증거가 돼요?"
NARR: "메리의 입이 반 박자 멈춘다."

SHOW: mary frozen
MARY: "...증거?"
SHOW: mary warm
MARY: "그 애가 봤다잖아. 여기서는, 그게 증거야."
THINK: "미쳤나 봐. 꿈에서 봤다는 게 증거라고?"

SHOW: orphea default
ORPHEA: "정확히는 '유령을 봤다'죠. 1692년 매사추세츠 법정에서 가장 신뢰받는 증거 형식입니다. 반박하는 방법은 아직 발명되지 않았고요."
HIDE: orphea

SFX: sfx_man_footsteps
NARR: "이웃 남성이 울타리 밖을 지나가며 메리를 흘겨본다."
SHOW: mary frozen
NARR: "메리의 입이 반 박자 멈춘다."
SHOW: mary warm
MARY: "...아무튼. 시간이 없어."

END_SCENE


SCENE: stage1_entry_02
BG: bg_salem_house_yard.jpg
BGM: bgm_morning_calm
SFX: sfx_wind_low

SHOW: mary warm
MARY: "방법이 없는 건 아니야."
MARY: "탄원서를 쓰는 거야. 이 사람은 신실한 사람이다, 우리가 보증한다 — 마을 사람들 서명을 받아서. 서명이 많을수록 판사들도 함부로 못 해."
NARR: "말하는 동안 메리의 손이 쉴 새 없이 움직인다."
PLAYER: "그게... 효과가 있어요?"
MARY: "효과 있을 거야."
NARR: "메리는 당신의 어깨 너머, 강변 쪽을 한 번 보았다가 시선을 되돌린다. 말은 없다."
THINK: "방금 어딜 본 거지."

MARY: "정오까지 생각해. 그 이상은 나도 못 기다려."

END_SCENE


SCENE: stage1_entry_03
BG: bg_salem_house_yard.jpg
BGM: bgm_morning_calm

NARR: "메리가 마당 구석의 아이 쪽으로 걸어간다."
NARR: "앞치마 주머니에서 건빵을 꺼내 내민다. 아이를 보지는 않는다."
NARR: "건네는 손과 받는 손이 잠깐 겹친다. 메리는 이미 다른 곳을 보고 있다."

SHOW: orphea default
ORPHEA: "친절한 분이군요. 친절은 세일럼에서 가장 비싼 사치품입니다."
HIDE: orphea

NARR: "해가 벌써 지붕 위까지 올라와 있다."
THINK: "빠르면 오늘 밤이라고 했지."

CHOICE:
  A: "메리와 함께 마을 사람들의 서명을 모은 결백 탄원서를 제출한다" → stage1_A_01
  B: "예배에 3주 빠진 것이 생각났다. 지금이라도 성실히 나간다" → stage1_B_01
  C: "이웃집 검은 고양이를 마녀의 사역자로 고발한다" → stage1_C_01

END_SCENE


SCENE: stage1_A_01
BG: bg_salem_village_street.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_knock_wood

NARR: "첫 번째 집. 메리가 노크한다. 안에서 인기척이 있다. 커튼이 흔들린다. 문은 열리지 않는다."
THINK: "분명 안에 있는데."

NARR: "두 번째 집. 문이 손가락 두 개 폭만큼 열린다. 주름진 눈이 내다본다."
PLAYER: "저, 부탁이 있어서 왔는데요. 서명을—"
???: "우리 집엔 아픈 사람이 있어."
SFX: sfx_door_close
NARR: "문이 닫힌다. 아픈 사람의 기척은 없었다."

NARR: "세 번째 집. 문이 열리고, 남자가 말없이 펜을 받아 든다. 서명하는 손이 빠르다. 너무 빠르다."
???: "빨리 넣어요. 누가 보기 전에."
NARR: "종이를 돌려주는 손이 이미 문고리를 잡고 있다."
THINK: "서명 하나 받는데 무슨 첩보 작전이야."

SHOW: mary warm
MARY: "됐어. 이 정도면 돼. 가자."
NARR: "종이 위의 이름은 넷. 메리의 걸음이 빨라진다."

END_SCENE


SCENE: stage1_A_02
BG: bg_salem_clerks_office_exterior.jpg
BGM: bgm_bureaucratic_low
SFX: sfx_quill_scratching

NARR: "서기 집무실. 창구 안쪽에서 펜이 종이를 긁는 소리."
SHOW: mary warm
NARR: "메리가 탄원서를 창구 안으로 밀어 넣는다. 서기가 받아 훑는다. 표정이 없다."
THINK: "이름을 적으면, 마을이 내 편이라는 증거가 남는 거야. 합리적이잖아."

SFX: sfx_door_muffled_voice
NARR: "안쪽 문 너머에서 낮고 느린 목소리가 새어 나온다."
CORWIN: "(문 너머) 서명인 명단을 올려."

SHOW: mary frozen
NARR: "메리가 당신 팔에서 즉시 손을 뗀다. 한 발 물러선다."
HIDE: mary
THINK: "왜 손을 떼. 방금까지 같이 하자며."

NARR: "서기의 펜이 다시 움직인다. 탄원인 칸이 아닌, 옆 칸에 이름들이 옮겨 적힌다. 하나씩."
THINK: "저 칸은 뭐지."
NARR: "메리는 그 광경을 본다. 놀라지 않는다."

SHOW: orphea slight_smile
ORPHEA: "서류에 이름을 남기는 행위. 현대인이 가장 신뢰하는 절차죠."
ORPHEA: "당시 사람들도 그렇게 믿었습니다."
HIDE: orphea

STAT: 평판 -30

END_SCENE


SCENE: stage1_A_03
BG: bg_salem_house_night.jpg
BGM: bgm_night_wind
SFX: sfx_night_crickets

NARR: "밤. 아이는 잠들었다. 작은 숨소리."
NARR: "당신은 눕지 못하고 앉아 있다. 손가락에 잉크 얼룩이 남아 있다. 문질러도 지워지지 않는다."
THINK: "그래도 뭐라도 했잖아. 종이에 이름이 남았잖아. 넷이나."
THINK: "...근데 메리는 왜 손을 뗐지."

GOTO: stage1_arrest
END_SCENE


SCENE: stage1_B_01
BG: bg_salem_meetinghouse_interior_empty.jpg
BGM: bgm_hymn_distant
SFX: sfx_hymn_singing

NARR: "저녁 기도회. 사람이 적다. 당신은 앞쪽에 앉는다. 목사의 시야에 들어가는 자리."
NARR: "찬송이 시작된다. 입 모양은 몸이 기억하고 있다. 가사가 저절로 나온다."
THINK: "보여주는 거야. 나 여기 있다고. 하나님이랑 아무 문제 없다고."

NARR: "옆자리의 노파가 반 뼘 옆으로 옮겨 앉는다. 소리 없이."
THINK: "...봤어. 다 보여."
NARR: "당신은 더 크게 부른다."

STAT: 신앙 +20

END_SCENE


SCENE: stage1_B_02
BG: bg_salem_meetinghouse_corridor.jpg
BGM: bgm_hymn_distant
SFX: sfx_footsteps_hollow

NARR: "기도회가 끝나고 사람들이 빠져나간다. 당신은 초를 끄는 일을 돕느라 마지막이 된다."
NARR: "복도 끝, 닫힌 방. 창문 너머에서 낮은 목소리. 종이 펼치는 소리."
CORWIN: "(창문 너머) 강변 쪽 땅 주인이 누구지?"

NARR: "발이 멈춘다."
SFX: sfx_finger_tapping_map
NARR: "손가락이 종이를 톡, 톡, 두드린다. 같은 자리를."
NARR: "안에서 다른 목소리가 무어라 대답한다. 너무 작아 들리지 않는다."
THINK: "내 땅 얘길, 왜 저 방에서 해."

SFX: sfx_distant_footsteps_approaching
NARR: "반대편 복도에서 성도 한 명이 걸어온다. 안의 목소리는 멈추지 않는다. 자리를 뜰 수도 없다."
NARR: "성도와 눈이 마주친다. 잠깐."
NARR: "성도가 그냥 지나간다. 아무것도 묻지 않는다."
NARR: "심장 소리가 복도보다 크다."

END_SCENE


SCENE: stage1_B_03
BG: bg_salem_house_night.jpg
BGM: bgm_night_quiet
SFX: sfx_candle_flicker

NARR: "밤. 집. 아이는 잠들었다. 작은 숨소리."
NARR: "당신은 촛불 하나를 켜고 앉는다."
THINK: "저 사람들이 뭘 원하는지는 몰라도, 내 이름 밑에 있는 건 위험해."
THINK: "내 이름에서 떼어놓으면 되잖아. 그거면 되잖아."

NARR: "종이. 잉크. 펜을 쥔 손이 잠깐 떨리다가, 멈춘다."
NARR: "농지 전부를 아들 몫으로 남긴다는 문장을 쓴다. 한 자씩. 또박또박."
NARR: "날짜를 적는 손이 멈칫한다. 오늘 날짜. 서명."

ITEM_GET: land_deed_info

NARR: "잠든 아이의 숨소리에 맞춰 종이를 접는다. 마루장 아래. 서류가 어둠 속으로 들어간다."

SFX: sfx_knock_heavy
NARR: "문 두드리는 소리. 세 번."
NARR: "잉크는 아직 마르지 않았다."

STAT: 평판 +10
STAT: 정신력 -10

GOTO: stage1_arrest
END_SCENE


SCENE: stage1_C_01
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient
SFX: sfx_cat_movement

NARR: "마을 길. 이웃집 처마 아래 검은 고양이가 눈을 감고 있다."
NARR: "지나가던 사람이 고양이를 보고 황급히 성호를 긋는다."
THINK: "...쟤다."
THINK: "시선이 나한테서 떨어지려면, 붙을 데가 따로 있어야 해."

NARR: "서기 집무실. 창구 안쪽의 서기가 고개를 든다."
PLAYER: "저... 이웃집 고양이가 좀 이상해서요. 밤에... 사람처럼 울어요."
NARR: "서기가 펜을 든다. 받아 적는다. 너무 자연스럽게."
???: "색은."
PLAYER: "네?"
???: "고양이 색."
PLAYER: "...검정이요."
NARR: "서기가 고개를 끄덕인다. 펜이 움직인다. 아무도 웃지 않는다."
THINK: "농담처럼 들릴 줄 알았는데. 접수가 되네. 진짜 되네."

SHOW: orphea slight_smile
ORPHEA: "남에게 손가락을 돌리는 전략. 가장 인간적인 본능입니다."
HIDE: orphea

END_SCENE


SCENE: stage1_C_02
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient
SFX: sfx_crowd_gather

NARR: "소문은 반나절이 걸리지 않았다. 이웃집 앞에 사람들이 모인다."
NARR: "고양이 주인이 입을 연다. 무어라 말하려 한다."
NARR: "주변 시선이 일제히 그쪽으로 쏠린다. 입이 닫힌다."

NARR: "예배당 창문 너머로 아비게일이 이쪽을 바라보고 있다."
NARR: "표정이 없다. 발작도, 두 손 모은 기도도 아니다. 그냥 본다."
THINK: "어제 그 발작하던 애가, 지금은 멀쩡히 날 보고 있어."

STAT: 평판 -10

END_SCENE


SCENE: stage1_C_03
BG: bg_salem_village_street.jpg
BGM: bgm_village_ambient_quiet

NARR: "골목에서 고양이 주인과 마주친다. 원망의 말은 없다."
NARR: "그 사람이 잠시 하늘을 올려다본다. 한참 뒤에 문을 열고 안으로 들어간다."
NARR: "당신은 그 등을 본다. 문이 닫힌다."

NARR: "밤. 잠자리에 누웠는데, 창밖 어디선가 고양이가 운다."
NARR: "길게. 꼭 사람처럼."
THINK: "...내가 지어낸 말이잖아. 근데 왜 진짜 그렇게 들려."

GOTO: stage1_arrest
END_SCENE


SCENE: stage1_arrest
BG: bg_salem_house_night.jpg
BGM: bgm_dread_low
SFX: sfx_knock_heavy

NARR: "문 두드리는 소리. 세 번. 밤의 집이 통째로 울린다."
NARR: "창밖으로 등불 빛이 벽을 훑고 지나간다."

NARR: "문을 연다. 남자 셋. 앞의 남자가 모자를 쓴 채 종이를 펼친다."
MARSHAL: "과부 엘리자베스."
MARSHAL: "매사추세츠만 식민지의 이름으로. 마법 혐의에 관한 체포영장이오. 본 영장은 금일 아침 발부되었으며—"
NARR: "자신의 이름이 공문서로 낭독되는 소리는, 남의 이름처럼 들린다."

PLAYER: "잠깐만요. 증거가 있어요? 뭘 근거로—"
MARSHAL: "영장에 적혀 있소."
PLAYER: "아니, 지금 한밤중이잖아요. 애가 자요. 아침에 가면 안 돼요?"
MARSHAL: "절차요."
NARR: "마샬의 목소리에는 악의가 없다. 그게 더 나쁘다."

SFX: sfx_child_waking
SON: "...엄마?"
NARR: "아이가 문지방 안쪽에 서 있다. 맨발로."
NARR: "치맛자락을 잡는 작은 손. 마샬이 그 손을 떼어낸다. 거칠지 않게. 그게 더 나쁘다."
PLAYER: "아침에 올게. 자고 있어."
NARR: "밧줄이 손목에 감긴다. 주머니 속에서, 어제 아이가 준 돌이 만져진다."

NARR: "끌려 나가는 길. 이웃집 창문들의 불이 하나씩 꺼진다."
NARR: "발소리 다섯. 그중 둘은 당신 것이 아니다— 넷은 당신 것이 아니다. 당신 것은 둘뿐이다."

SHOW: orphea default
ORPHEA: "생존 확률 계산 중."
ORPHEA: "23%. 역사적으로 인기 있는 자살 루트입니다."
HIDE: orphea

GOTO: stage2_entry
END_SCENE

---
<!-- S2 이하 집필 예정 -->

<!--
=== 스테이지 리추얼 체크 (오프닝 + 스테이지 1 / 2026-07-06 개정 구조) ===

□ 절차적 상태 점프 없는가?
  → 통과. 공개 지목(opening_02) → 정식 고발 소식(stage1_entry_01) → 체포(stage1_arrest).
    각 전환이 씬으로 존재. 심문은 stage2에서.

□ NARR 3줄 이내마다 NPC 대사 또는 신체반응 있는가?
  → 통과. 최장 NARR 연속 2~3줄, 직후 대사/THINK 교차.

□ 플레이어-NPC 티키타카 (패턴 7) 있는가?
  → 통과. 아들(opening_05 2왕복), 메리(stage1_entry_01 3왕복+),
    문전 거절(stage1_A_01 2왕복), 서기(stage1_C_01 문답), 마샬(stage1_arrest 2왕복).
    NPC 티키타카 중 오르페아 개입 씬당 최대 1회 준수.

□ 복선·선택지 직전 의문이 행동으로만 심어졌는가?
  → 통과. 강변 시선(THINK "방금 어딜 본 거지" — 질문 스톱),
    옆 칸 기재(THINK "저 칸은 뭐지" — 질문 스톱), 영장 발부 시각(낭독문에 묻음, THINK 안 짚음).

□ 복선 반복 금지 (한 복선 = 한 씬)?
  → 통과. '강변' 발화는 stage1_B_02 코윈 1회뿐.
    stage1_entry_02 메리 시선은 단어 없이 방향만. THINK 해석 없음.

□ 함정 선택지(A)가 현대 상식으로 맞아 보이는가?
  → 통과. "서명 = 마을이 내 편이라는 증거" + stage1_A_02 THINK로 합리성 강화.

□ 오르페아 금지어 / 타이밍?
  → 통과. 등장 5회(entry_01 스펙트럴, entry_03 사치품, A_02 절차, C_01 본능, arrest 23%).
    B분기 서류 작성(ITEM_GET) 시 침묵. 체포 대화 중 침묵, 연행 후 발화.

□ land_deed_info 획득 시 오르페아 코멘트 없는가?
  → 통과. stage1_B_03 조용히 진입.

□ 톤 샘플 자가 점검
  → 감각 진입(opening_03~05, stage1 각 씬 비시각 감각), 분할 투하(메리 소식 3계단),
    익명 NPC(밀지 맙시다 콜백, 노파 반 뼘, 문전 거절 3형태, 서기),
    유머 회수(돌 → 체포 시 주머니 속 돌 / "사람처럼 울어요" → C_03 밤 울음).

[복선 심기 로그]
  타입D: 검은 코트+서기+마을회관(opening_04) — 배경 소음 사이에 묻음. 회수: S2 심문실 코트.
  타입B: 메리 강변 시선(stage1_entry_02) — 단어 발화 없음. 회수: 최종관문.
  타입A: 메리 팔 뗌(stage1_A_02) — 회수: 최종관문 증인석.
  타입A: 코윈 목소리+두드림(stage1_A_02/B_02) — 회수: S2 목소리 재인지, 최종관문 지도.
  타입C: 고양이 고발(stage1_C) — 회수: 엔딩 에필로그 13마리.
  타입D: 영장 "금일 아침 발부"(stage1_arrest) — 회수 강제 없음.
  타입D: 아이의 하얀 돌(opening_05 → arrest 주머니) — 에피소드 관통 소품. 회수: 엔딩.
-->
