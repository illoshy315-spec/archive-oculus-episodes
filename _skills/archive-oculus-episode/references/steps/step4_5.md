# Step 4.5 — 화면 프로토타입 (claude.ai 협업)

## 임무
vn_script.md 집필 완료 후, game.html 빌드 전에
claude.ai에서 화면 프로토타입을 먼저 제작해 UI/톤/이펙트를 확정한다.

---

## 왜 필요한가

클코가 텍스트만 보고 바로 빌드하면 UI 디테일을 놓칠 수 있음.
화면으로 직접 보면서 다듬은 뒤 최종 빌드에 반영하는 단계.

---

## 프로세스

1. vn_script.md + scenario.json을 claude.ai 채팅에 첨부 (또는 복붙)
2. claude.ai가 React/HTML Artifact로 프로토타입 제작
   - 배경, 오르페아 등장, 타이핑 애니메이션
   - 선택지 버튼, 스탯 UI까지 실제 작동하는 형태
3. 화면 보면서 톤/이펙트/레이아웃 조정
4. 확정되면 코드를 클코에게 전달

산출물: `prototype.html` (Step 5에서 이걸 기반으로 game.html 빌드)

---

## Step 4.5 완료 조건
- [ ] prototype.html 작동 확인
- [ ] 톤/레이아웃 사용자 승인
- [ ] 코드 클코에게 전달

승인 후 Step 5 진행.
