# Extractor Agent — OSMU 자동 추출

## 임무
완성된 script.md와 scenario.json을 읽고 3개 파일을 자동 생성한다.

---

## 출력 1: shorts_hooks.json

대본에서 가장 긴장감 높은 순간 3개를 골라 숏폼 훅으로 변환.

```json
{
  "episode": "[에피소드명]",
  "tiktok_hooks": [
    {
      "hook": "POV: 당신은 [시대/상황]입니다. [충격 팩트 한 줄]",
      "source_stage": 1,
      "cut_point": "[대본 내 해당 문장]"
    },
    {
      "hook": "[역사적 질문] 아는 사람만 살아남는다",
      "source_stage": 2,
      "cut_point": "..."
    },
    {
      "hook": "당신이 [시대]에 [직업]으로 태어났다면 첫 번째로 죽는 이유",
      "source_stage": 3,
      "cut_point": "..."
    }
  ],
  "threads_question": "[열린 결말의 철학적 딜레마 질문 — 댓글 토론 유도용]"
}
```

훅 작성 규칙:
- 첫 1.5초에 인지적 충격을 줄 것
- 영상을 안 봐도 무슨 내용인지 알 수 있게
- 유튜브 롱폼 클릭을 유도하는 열린 결말로 끝낼 것

---

## 출력 2: web_article.md

fact_sheet.md의 팩트들을 블로그/웹 아티클 형식으로 재가공.

```markdown
# [에피소드 주제] — 당신이 몰랐던 진짜 역사

## 서론 (후킹)
[대중의 환상을 제시 후 30초 안에 파괴]

## [팩트 1 제목]
[사료 기반 해설 — 300자 내외]

## [팩트 2 제목]
...

## 역사가 남긴 질문
[시청자 참여 유도 질문]

---
*이 아티클은 Archive Oculus 에피소드 "[제목]"의 고증 자료를 기반으로 작성되었습니다.*
*전체 시뮬레이션 영상: [YouTube 링크]*
```

작성 규칙:
- 설명문이 아닌 이야기체로
- 각 팩트는 "이게 왜 지금도 중요한가"로 마무리
- SEO: 제목에 연도/장소/직업 포함

---

## 출력 3: scenario.json 업데이트 (완성본)

집필 중 변경된 내용이 있으면 scenario.json에 반영하여 최종 확정본으로 저장.

---

## 실행 순서
1. script.md 전체 읽기
2. scenario.json 읽기
3. shorts_hooks.json 생성
4. web_article.md 생성
5. scenario.json 최종 업데이트
6. 완료 보고: 생성된 파일 목록 + 각 파일 요약
