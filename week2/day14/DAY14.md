# Day14 — 음식 추천 랭킹 시스템 설계

##  목표
- 랭킹 / 랜덤 추천 / 로그인 3가지 핵심 기능 구현
- 기능을 잘게 쪼개어 **재사용성, 유지보수성, 가독성** 강화
- `pages–layout–components–hooks–sections` 계층 분리

---

##  기능 명세

### 기능 1) 랭킹 보기
- **트리거**: Navbar 또는 Main 섹션의 “랭킹” 버튼
- **동작**: `useFoodListQuery`로 20개 데이터 로드 → `FoodListRender`에서 카드 리스트 렌더
- **UI**: `FoodList`(컨테이너) + `FoodListRender`(프레젠테이션)
- **데이터 소스**: `public/data/foods.json` (정적) → 추후 API 교체 가능

### 기능 2) 랜덤 추천
- **트리거**: “랜덤” 버튼
- **동작**: 현재 로드된 리스트에서 1개 랜덤 추출 → `RandomFood` 컴포넌트에 표시
- **노트**: 리스트 미로딩 시 `useFoodListQuery`로 데이터 fetch

### 기능 3) 로그인
- **UI**: Bootstrap 폼 (`email`, `password`, [ ] remember me)
- **동작**: 프론트 단 상태 보관 (추후 백엔드 연동 대비)
- **상태**: `isAuthenticated`를 Layout 최상위에서 관리 → `Navbar`에 반영

---

## 📂 폴더 구조

- App.jsx

    - pages
        - Home.jsx
        - Login.jsx

    - layout
        - Layout.jsx

    - component
        - Button.jsx
        - foodlist.jsx
        - FoodListRender.jsx
        - RandomFood.jsx

    - Hooks
        - useFoodListQuery.jsx

    - sections

        - common
            - Navbar.jsx
            
        - home
            - Main.jsx


---

## 🌐 라우팅 & 레이아웃

- **App.jsx**
  - `/` → `<Layout><Home/></Layout>`
  - `/login` → `<Layout><Login/></Layout>`

- **Layout.jsx**
  - 공통 UI(헤더/푸터/컨테이너)
  - `<Navbar/>` 포함

- **Navbar.jsx**
  - 좌: 로고/홈
  - 우: 로그인/로그아웃 버튼 + “랭킹”, “랜덤” 버튼

---

## ⚙️ 컴포넌트 역할

- **Button.jsx** → 재사용 버튼 (variant, size)
- **FoodList.jsx** → 컨테이너, 데이터 fetch 후 렌더 전달
- **FoodListRender.jsx** → 프레젠테이션, 음식 카드 리스트 표시
- **RandomFood.jsx** → 랜덤 음식 카드/모달 표시
- **Main.jsx** → 홈 상단, CTA 버튼(랭킹/랜덤)
- **Home.jsx** → `Main` + `FoodList` 조합
- **Login.jsx** → Bootstrap 폼, 인증 상태 변경

---

## 🔄 훅 & 상태

### useFoodListQuery.jsx
```js
const { data, isLoading, error, refetch } = useFoodListQuery();
