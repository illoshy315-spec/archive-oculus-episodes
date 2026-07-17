# EP02 폼페이 — VN 스크립트
<!-- scenario.json 🔒 기준. 씬 비트: scene_beats_EP02.md. 진행: 오프닝 + S1 (S2부터 승인 후 계속) -->

SCENE: op_sim
BG: bg_headset_dark.jpg
BGM: bgm_system_cold

ORPHEA: "Orphea Archive. 생존 시뮬레이션."
ORPHEA: "인스턴스 로드 중."
NARR: "신경 동기화 수치 91%"
NARR: "97.2%"
NARR: "100.0%"
ORPHEA: "캄파니아, 폼페이. 79년."
ORPHEA: "경고. 이 시뮬레이션에서 '기다림'은 사망 원인입니다."

NARR: "부드러운 가죽이 눈을 덮는다. 시야가 까맣게 닫힌다."
NARR: "볕에 달궈진 돌 냄새. 생선 삭는 냄새. 그리고 아주 멀리서, 개 짖는 소리."

ORPHEA: "접속을 축하합니다. 당신은 폼페이의 상인 저택에 계십니다."
ORPHEA: "당신의 직책은... 아, 직책이라기엔 좀 그렇군요."
THINK: "뭐가? 점원? 경리?"
ORPHEA: "재산입니다."
THINK: "재산? 내가 부자라고?"
ORPHEA: "아니요. 당신이 재산이라고요. 이 집 장부 기준, 노새 두 마리와 포도주 압착기 사이에 기재되어 있습니다."
THINK: "잠깐. 그러니까 내가— 노예라고?"

ORPHEA: "8년차입니다. 성실하셨더군요. 팁과 수수료를 모은 사적 저축, 페쿨리움 사백육십 데나리우스."
ORPHEA: "당신 몸값이 오백. — 참고로 군단병 연봉 두 해치입니다. 사십 데나리우스만 더 모으면, 당신은 당신을 살 수 있습니다."
THINK: "내 돈으로... 나를 산다고?"
ORPHEA: "네. 훌륭한 제도죠. 누구에게 훌륭한지는 곧 아시게 됩니다."

ORPHEA: "규칙은 하나. 살아남으십시오."
ORPHEA: "아, 그리고 미리 말씀드리죠. 이 도시 주민 대부분은 살아남습니다."
THINK: "...그럼 쉬운 거 아냐?"
ORPHEA: "당신의 질문은 '사느냐'가 아닙니다. '무엇으로 사느냐'입니다."
GOTO: op_city
END_SCENE

SCENE: op_city
BG: bg_villa_dawn.jpg
BGM: bgm_morning_calm
SFX: sfx_dog_distant

NARR: "빵 굽는 냄새가 벽을 타고 넘어온다. 볕이 회랑의 돌바닥을 데우고, 포도 넝쿨 그늘이 살랑—"
THINK: "허리야. 저게 침상이냐? 부엌 옆 골방에 거적때기 하나."
NARR: "...볕만 좋은 아침이다."

NARR: "물독으로 간다. 바닥이 뿌옇다. 잔모래 같은 것이 가라앉아 있다."
NARR: "그리고 발밑에서, 돌이 아주 낮게 운다. 그릇 두 개가 서로 부딪혀 잘그락거린다."
???: "또 흔들리네."
???: "캄파니아가 다 그렇지. 열일곱 해 전엔 신전이 무너졌어도 다시 지었는데, 뭘."
NARR: "부엌 노예들이 그릇을 다시 쌓는다. 아무도 고개를 들지 않는다."
THINK: "지진인데? 다들 왜 이렇게 태연해?"

SHOW: carpus stern
NARR: "회랑 끝. 마른 남자가 밀랍판을 들고 서 있다. 이 집의 금고지기 — 열쇠와 장부의 사람, 카르푸스."
CARPUS: "점호. 부엌 셋, 마당 둘, 창고 하나."
CARPUS: "너. 주인님 심부름이다. 포도주 견본, 광장 환전상에게. 정오까지."
PLAYER: "예. 다녀오겠습니다."
CARPUS: "늦으면 장부에 적힌다."
HIDE: carpus
THINK: "장부, 장부. 사람보다 장부가 먼저인 양반이네."
ORPHEA: "정확한 관찰입니다. 저 장부에는 당신도 적혀 있고요."
GOTO: s1_plaza
END_SCENE

SCENE: s1_plaza
BG: bg_plaza_noon.jpg
BGM: bgm_city_bustle
SFX: sfx_crowd_market

NARR: "정오의 광장. 땀 냄새, 가룸 냄새, 환전상의 동전 부딪는 소리."
NARR: "심부름은 끝났다. 손이 가볍다."
THINK: "생각보다 살 만한데? 사십 데나리우스만 모으면—"

SFX: sfx_deep_rumble
NARR: "소리가 먼저 온다. 천둥이 아니다. 땅 밑에서 올라와 발바닥을 치고 가슴뼈까지 두드리는 소리."
NARR: "광장이 일제히 멈춘다. 모두가 같은 방향을 본다."
NARR: "산 위로 무언가가 솟는다. 검은 기둥. 꼭대기가 우산처럼, 소나무처럼 펼쳐진다."
THINK: "저런 거 재난 영화에서 봤는데. 보통 저 장면 나오면 주인공 빼고 다 죽던데."

???: "산이... 산이 불을 뿜는다!"
???: "조용히 해! 신들이 듣는다!"
NARR: "누군가는 무릎을 꿇는다. 누군가는 웃는다. 포도주 통을 진 상인이 지나가며 침을 뱉는다."
???: "열일곱 해 전에도 세상 끝난다고 난리였지. 신전 두 채 값만 날렸어."
THINK: "아니, 저건 지진이랑 다르잖아. 저 구름 좀 보라고."

CHOICE:
  A: "\"저건... 거인들이다! 거인들이 산을 걷고 있어!\" 하고 외친다" → s1_giants
  B: "입을 다물고 저택으로 뛴다" → s1_choice

END_SCENE

SCENE: s1_giants
BG: bg_plaza_noon.jpg
SFX: sfx_crowd_gasp

NARR: "말이 먼저 나갔다. 연기 기둥 속, 흔들리는 형상들이 정말로 거대한 어깨처럼 보인다."
???: "거인? …기간테스? 산 밑에 봉인된?"
???: "보인다... 나도 보여! 걷고 있어!"
NARR: "몇몇이 그 자리에 무릎을 꿇고 기도를 시작한다. 당신 곁에 선 노파가 당신의 소매를 꽉 붙든다."
FLAG_SET: giants_rumor
STAT: 유대 +5
STAT: 정보 -10
ORPHEA: "거인. 기록해두죠. 당시 지식으로는 나무랄 데 없는 가설입니다. 대응책이 '기도'라는 게 문제일 뿐."
THINK: "...내가 무슨 소리를 한 거지. 근데 진짜 그렇게 보인단 말이야."
GOTO: s1_choice
END_SCENE

SCENE: s1_choice
BG: bg_villa_street.jpg
BGM: bgm_tension_rising
SFX: sfx_pumice_first

NARR: "저택 앞 거리. 뛰어오는 동안 하늘이 반 뼘 어두워졌다."
NARR: "차양 위로 무언가가 톡, 하고 떨어진다. 톡. 톡톡. 회색 알갱이가 발치에 구른다. 주우니 — 가볍다. 돌인데 가볍다."
THINK: "돌이 왜 이렇게 가벼워? 이게 뭐지?"

NARR: "저택 문 앞에 마차가 서 있다. 루키우스 님의 마차. 궤짝이 실린다. 하나. 둘. 셋."
NARR: "궤짝이 좌석까지 차지했다. 마차에 사람 자리는 — 두 개뿐이다. 이 집 사람은 열둘인데."

SHOW: lucius default
LUCIUS: "아, 왔구나. 마침 잘 왔다."
NARR: "루키우스 님이 당신의 어깨를 두드린다. 짐의 상태를 확인하는 손길과, 구분이 되지 않는다."
LUCIUS: "산이 소란스럽구나. 좋아, 너니까 맡기는 거다 — 금고와 문서함, 해 지기 전에 해변으로. 배를 마련해두마."
PLAYER: "해변이요? 이 날씨에 배가 뜹니까?"
LUCIUS: "돈이 뜨게 만든단다."
NARR: "그는 웃는다. 재가 내리는 하늘 아래서, 토가 주름을 정돈하면서."
LUCIUS: "네 몸값 장부도 그 문서함에 있다는 건 알아두고."
HIDE: lucius

SHOW: carpus stern
CARPUS: "명령은 들었겠지. 지켜라. 그게 전부다."
HIDE: carpus
NARR: "길 건너. 늙은 노새꾼이 혼자 짐수레와 씨름하고 있다. 노새가 자꾸 산 반대쪽으로 머리를 튼다."
NARR: "성문 쪽 길엔 벌써 보따리를 인 사람들이 드문드문. 하늘에서 재가, 첫눈처럼 성글게 내린다."
THINK: "명령을 어기면 나는 뭐가 되지? 도망 노예의 이마에 찍는다는 그 낙인이—"

CHOICE:
  A: "지금 맨몸으로 성문을 향한다" → s1a_out
  B: "노새꾼의 짐수레 세우는 걸 돕는다" → s1b_castor
  C: "명령대로 금고와 문서함을 꾸린다" → s1c_pack

END_SCENE

SCENE: s1a_out
BG: bg_street_evac.jpg
BGM: bgm_tension_rising
SFX: sfx_crowd_flee

NARR: "당신은 등을 돌린다. 금고도, 문서함도, 사백육십 데나리우스도."
CARPUS: "어딜— 한 발만 더 디디면, 장부에 적힌다!"
NARR: "당신은 디딘다. 목소리가 등에 꽂히고, 떨어져 나간다."
FLAG_SET: early_leaver
STAT: 재산 -15

NARR: "성문 쪽 인파에 섞인다. 보따리, 새장, 업힌 노인, 우는 아이."
NARR: "행렬이 성문을 지나 하나같이 왼쪽으로 굽는다. 북쪽. 나폴리 가도 쪽이다."
THINK: "다들 북쪽이네. ...뭘 알고 가는 건가, 그냥 큰길이라 가는 건가?"
STAT: 정보 +10
ORPHEA: "팔 년 치 저축을 두고 가시는군요. 빠르긴 합니다. 역사가 좋아하는 속도인지는, 곧 알게 되겠죠."
GOTO: s2_street
END_SCENE

SCENE: s1b_castor
BG: bg_villa_street.jpg
BGM: bgm_uneasy_calm

NARR: "당신은 길을 건넌다. 기울어진 짐수레 아래로 어깨를 밀어 넣는다."
CASTOR: "...오른쪽. 아니, 오른쪽이라니까."
NARR: "수레가 바로 선다. 노새꾼은 고맙다는 말 대신, 경석 한 알을 주워 어금니로 깨물어 보고 뱉는다."
CASTOR: "...가볍군. 아직은."
PLAYER: "아직은요? 그게 무슨—"
CASTOR: "바람."
NARR: "그가 턱으로 산을 가리킨다. 검은 기둥의 꼭대기가 한쪽으로, 아주 천천히 기울고 있다."
CASTOR: "남쪽으로 분다. 재도 남쪽으로 가겠지."
THINK: "남쪽...?"
STAT: 정보 +30
FLAG_SET: castor_debt

NARR: "노새가 움직이기 시작한다. 그 짧은 틈에 당신은 골방으로 뛰어 — 마룻장 밑, 흙 항아리를 파낸다."
NARR: "사백육십 데나리우스. 팔 년. 허리춤에 묶으니 묵직하다."
STAT: 재산 +25
FLAG_SET: has_peculium
GOTO: s2_entry
END_SCENE

SCENE: s1c_pack
BG: bg_villa_atrium.jpg
BGM: bgm_uneasy_calm
SFX: sfx_pumice_roof

NARR: "당신은 고개를 끄덕인다. 팔 년을 그래 왔던 각도로."
NARR: "금고는 어른 하나 무게다. 문서함, 은식기 상자, 주인마님의 보석함. 어깨끈이 살을 파고든다."
STAT: 체력 -15
STAT: 재산 +25
FLAG_SET: beach_promise
FLAG_SET: has_peculium

NARR: "문서함 뚜껑 틈으로 밀랍판 모서리가 보인다. 당신 이름이 새겨진 판. 사백육십이라는 숫자."
NARR: "당신은 뚜껑을 눌러 닫는다. 손이 잠깐, 그 위에 머문다."
THINK: "해변까지만. 해변까지만 가면 된다."

NARR: "짐을 다 묶었을 때, 마당이 한 층 더 어두워져 있다. 차양을 때리는 소리가 빗소리처럼 촘촘해졌다."
ORPHEA: "충성이군요. 통계적으로 그 단어의 생존률을 아직 계산 중입니다만."
GOTO: s2_entry
END_SCENE

<!-- ===== 이하 S2부터 사용자 승인 후 계속 (아래는 임시 스텁 — S2 집필 시 교체) ===== -->

SCENE: s2_entry
NARR: "[S2 스텁 — 경석의 밤. 승인 후 집필]"
END_SCENE

SCENE: s2_street
NARR: "[S2 거리 변형 스텁 — 승인 후 집필]"
END_SCENE
