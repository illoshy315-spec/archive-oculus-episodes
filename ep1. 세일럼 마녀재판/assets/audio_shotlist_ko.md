# EP01 오디오 제작 리스트 (한글 설명)

파일명은 영어(`asset_manifest.md` 그대로) + `.mp3`로 저장하고, `assets/bgm/`, `assets/sfx/`에 넣기.
레오나르도는 이미지 전용이라 오디오는 다른 도구(Suno, ElevenLabs SFX, 효과음 라이브러리 등) 필요.

둘 다 엔진에 실제로 연결돼 있어서(BGM=반복재생, SFX=1회재생), 없는 건 그냥 무음+디버그 토스트로 넘어가.
BGM보다 SFX가 훨씬 많은데, 급하면 BGM 먼저 채우고 SFX는 부분적으로만 채워도 안전해.

---

## BGM — 15개 (배경음악, 반복 재생)

| 파일명 | 어디서 쓰이나 | 느낌 |
|---|---|---|
| `bgm_void_hum` | 오프닝 시네마틱, 오르페아 접속 화면 | 공허하고 디지털적인 낮은 허밍. 인간적이지 않은 느낌 |
| `bgm_crowd_tension` | 오프닝 발작·지목 장면 | 군중 속 긴장감, 서서히 조여드는 불안 |
| `bgm_morning_calm` | S1 진입 — 집 마당, 거짓 안도의 아침 | 평온해 보이지만 어딘가 불안정한 아침 분위기 |
| `bgm_village_ambient` | 골목길 서명 수집, 고양이 고발 장면 | 마을의 일상적인 배경음, 담담함 |
| `bgm_hymn_distant` | 예배당 관련 장면(설교, 엿듣는 장면) | 멀리서 들리는 찬송가, 경건하지만 서늘함 |
| `bgm_night_quiet` | S1-B 밤, 양도서류 작성 씬 | 고요한 밤, 촛불 하나의 정적 |
| `bgm_dread_low` | 한밤 체포 장면 | 낮게 깔리는 공포감, 무거운 전조 |
| `bgm_bureaucratic_low` | 서기 창구, 서류 처리 장면 | 건조하고 관료적인, 감정 없는 절차의 소리 |
| `bgm_cell_ambient` | 유치장 대기실 (S2 진입) | 갇힌 공간의 눅눅하고 답답한 배경음 |
| `bgm_interrogation_low` | 코윈 예비심문 (S2) | 침묵이 위협이 되는 심문실의 팽팽함 |
| `bgm_cell_deep` | 감옥, 세라와의 만남 (S3) | 더 깊고 무거운 절망감, 그러나 미세한 온기 |
| `bgm_court_low` | 최종관문 법정 시작 | 법정의 위압감, 낮게 깔리는 긴장 |
| `bgm_court_collapse` | 최종관문 클라이맥스 (선택 직후) | 모든 게 무너지는 절정의 순간 |
| `bgm_tension_release` | 선택 직후 짧은 이완 구간 | 팽팽함이 잠깐 풀리는, 그러나 완전한 안도는 아닌 |
| `bgm_dark_end` | 사망 엔딩들 (교수형/프레싱 등) | 어둡고 무거운 종결감 |

---

## SFX — 35개 (효과음, 1회 재생)

### 군중 소리
| 파일명 | 설명 |
|---|---|
| `sfx_crowd_gather` | 사람들이 모여드는 소리 |
| `sfx_crowd_murmur` | 군중 웅성거림 (먼 거리) |
| `sfx_crowd_murmur_close` | 군중 웅성거림 (가까이) |
| `sfx_crowd_hush` | 군중이 일제히 조용해지는 순간 |
| `sfx_crowd_gasp` | 군중이 동시에 헉 하는 소리 |
| `sfx_crowd_breath` | 군중이 숨죽이는 소리 |
| `sfx_crowd_shift` | 군중이 자세를 바꾸며 웅성이는 소리 |
| `sfx_crowd_dispersing` | 군중이 흩어지는 소리 (예배당 밖) |

### 아비게일 (발작 관련)
| 파일명 | 설명 |
|---|---|
| `sfx_abigail_gasp` | 아비게일이 헉 하고 숨을 들이쉬는 소리 |
| `sfx_abigail_scream` | 아비게일의 발작 비명 |

### 신체/움직임
| 파일명 | 설명 |
|---|---|
| `sfx_body_fall` | 몸이 쓰러지는 소리 (발작, 프레싱 등) |
| `sfx_chair_fall` | 의자가 넘어지는 소리 |
| `sfx_chair_scrape` | 의자를 끄는 소리 (심문실) |
| `sfx_man_footsteps` | 남자 발소리 |
| `sfx_hurried_footsteps` | 급하게 걷는 발소리 (메리 등장) |
| `sfx_distant_footsteps_approaching` | 멀리서 점점 다가오는 발소리 |

### 쇠사슬/구금
| 파일명 | 설명 |
|---|---|
| `sfx_chains_distant` | 멀리서 들리는 쇠사슬 소리 |
| `sfx_chains_dragging` | 쇠사슬이 끌리는 소리 (이송 장면) |
| `sfx_iron_door_close` | 철문이 닫히는 소리 (감옥) |

### 문/노크
| 파일명 | 설명 |
|---|---|
| `sfx_door_open_heavy` | 무거운 문이 열리는 소리 |
| `sfx_door_muffled_voice` | 문 너머로 먹먹하게 들리는 목소리 (서기 창구, 코윈 목소리) |
| `sfx_knock_heavy` | 무겁게 문을 두드리는 소리 (한밤 체포) |

### 서류/문서
| 파일명 | 설명 |
|---|---|
| `sfx_paper_unfold` | 종이를 펼치는 소리 |
| `sfx_quill_scratching` | 깃펜으로 글씨 쓰는 소리 (서기, 서류 작성) |
| `sfx_quill_check` | 깃펜 상태 확인하는 짧은 소리 |
| `sfx_quill_stop` | 깃펜을 멈추는 소리 |
| `sfx_finger_tapping_map` | 손가락으로 지도를 톡톡 두드리는 소리 (코윈 — 복선/회수 장면 핵심 소리) |

### 환경음
| 파일명 | 설명 |
|---|---|
| `sfx_candle_flicker` | 촛불이 흔들리는 소리 |
| `sfx_wind_low` | 낮게 부는 바람 소리 |
| `sfx_wood_creak` | 나무가 삐걱거리는 소리 |
| `sfx_static_low` | 낮은 잡음/노이즈 (오르페아 개입 순간 등 디지털 느낌) |
| `sfx_cat_movement` | 고양이가 움직이는 소리 (S1-C 고양이 고발) |
| `sfx_chickens_morning` | 아침 닭 울음/움직임 소리 (집 마당) |
| `sfx_hymn_singing` | 찬송가 부르는 소리 (예배당) |
| `sfx_child_waking` | 아이가 잠에서 깨는 소리 (한밤 체포 장면, 아들이 깸)
