# Extractor Agent — OSMU 자동 추출

## 임무
완성된 vn_script.md + scenario.json + game.html을 읽고
유튜브 보이스오버 대본 / 숏폼 훅 / 웹 아티클을 생성한다.

---

## 출력 1: youtube_script.md (보이스오버 대본)

게임 녹화 영상 위에 오르페아가 나레이션하는 대본.
vn_script의 VN 대사를 확장하여 유튜브 포맷으로 변환.

변환 규칙:
- NPC 대사 → 오르페아가 상황 해설로 확장 (단, 오르페아 목소리 유지)
- CHOICE 직전 → "댓글에 A, B 중 무엇을 골랐는지 남겨보세요" 삽입
- BAD_END → 실제 역사 팩트 폭로 + 오르페아 마무리
- GOOD_END → 에필로그 + 구독/좋아요 → 게임 별점으로 치환
- STAT 변화 → 보이스오버에서 자연스럽게 언급
- 목표 분량: 7000자 이상

---

## 출력 2: shorts_hooks.json

게임 내 가장 긴장감 높은 선택지 장면 3개를 숏폼 훅으로 변환.

```json
{
  "episode": "[에피소드명]",
  "tiktok_hooks": [
    {
      "hook": "POV: 당신은 [시대/상황]. [충격 팩트 한 줄]",
      "source_scene": "씬ID",
      "visual_cue": "게임 캡처 타이밍 설명"
    },
    {
      "hook": "[역사적 질문] 아는 사람만 살아남는다",
      "source_scene": "씬ID",
      "visual_cue": "..."
    },
    {
      "hook": "당신이 [시대]에 [직업]으로 태어났다면 첫 번째로 죽는 이유",
      "source_scene": "씬ID",
      "visual_cue": "..."
    }
  ],
  "threads_question": "[댓글 토론 유도용 딜레마 질문]"
}
```

---

## 출력 3: web_article.md

fact_sheet.md의 팩트를 블로그/웹 아티클 형식으로 재가공.

```markdown
# [주제] — 당신이 몰랐던 진짜 역사

## 서론
[대중의 환상 → 30초 안에 파괴]

## [팩트 1]
[사료 기반 해설 300자 내외 + 출처 URL]

## [팩트 2~N]
...

## 역사가 남긴 질문
[시청자 참여 유도]

---
*Archive Oculus 에피소드 "[제목]" 고증 자료 기반*
*게임 플레이: [링크] | 유튜브 영상: [링크]*
```

---

## 실행 순서
1. vn_script.md 전체 읽기
2. scenario.json 읽기
3. fact_sheet.md 읽기
4. youtube_script.md 생성
5. shorts_hooks.json 생성
6. web_article.md 생성
7. 완료 보고: 파일 목록 + 각 파일 요약
