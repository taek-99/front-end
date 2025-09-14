# 📅 프론트엔드 학습 로드맵 (2025.09 ~ 2025.10.10)

## 1주차 (JavaScript 기초)

### Day 1 (JS 기초: 변수 & 타입)
- [ ] `var`, `let`, `const` 차이 이해  
- [ ] 기본 자료형(number, string, boolean, null, undefined, symbol)  
- [ ] 동적 타이핑 특성 확인  
- **실습:** 간단한 변수 선언 & 자료형 변환  

### Day 2 (조건문 & 반복문)
- [ ] if, switch 문 차이  
- [ ] for, while, for...of, for...in  
- [ ] break, continue 동작 확인  
- **실습:** 구구단 출력기, 짝수/홀수 판별기  

### Day 3 (함수 & 스코프)
- [ ] 함수 선언식 vs 표현식 vs 화살표 함수  
- [ ] 매개변수 기본값, Rest, Spread  
- [ ] 블록 스코프, 함수 스코프, 전역 스코프  
- **실습:** 합계/최댓값 구하기 함수 만들기  

### Day 4 (배열 & 객체)
- [ ] 배열 메서드(map, filter, reduce, find, some, every)  
- [ ] 객체 구조분해할당, 스프레드 문법  
- **실습:** 학생 성적 평균/최고점 계산  

### Day 5 (ES6+ 문법)
- [ ] 템플릿 리터럴  
- [ ] 구조 분해 할당  
- [ ] 모듈 import/export  
- **실습:** 모듈을 나눠서 관리하는 계산기  

### Day 6 (비동기)
- [ ] 콜백 → Promise → async/await 흐름  
- [ ] fetch API 기본 사용법  
- **실습:** JSONPlaceholder에서 데이터 불러오기  

### Day 7 (DOM 조작)
- [ ] querySelector / getElementById  
- [ ] addEventListener 이벤트 등록  
- [ ] DOM 수정(innerHTML, append, remove)  
- **실습:** 간단한 ToDo List (추가/삭제)  

---

## 2주차 (JS 심화 + TypeScript 기초)

### Day 8 (JS 심화: 클로저 & 이벤트 루프)
- [ ] 클로저 개념 & 활용  
- [ ] 이벤트 루프, 콜스택/태스크큐 동작 원리  
- **실습:** setTimeout 비동기 실행 순서 확인  

### Day 9 (JS 심화: 프로토타입 & 클래스)
- [ ] 프로토타입 체인  
- [ ] class 문법, 상속, super()  
- **실습:** 동물 클래스 만들고 상속  

### Day 10 (TS 기초: 타입 시스템)
- [ ] 기본 타입(number, string, boolean, any, unknown)  
- [ ] 타입 추론 vs 명시적 선언  
- **실습:** 타입 오류 발생시키고 고쳐보기  

### Day 11 (TS: 객체 & 배열 타입)
- [ ] 객체 타입 정의  
- [ ] 배열/튜플/enum  
- **실습:** 학생 타입 정의 & 리스트 출력  

### Day 12 (TS: 함수 타입)
- [ ] 매개변수 타입, 반환 타입  
- [ ] 옵셔널 매개변수  
- [ ] 유니온, 인터섹션  
- **실습:** 계산기 함수 타입 정의  

### Day 13 (TS: 인터페이스 & 타입 별칭)
- [ ] interface vs type 차이  
- [ ] 확장, 교차 타입  
- **실습:** 유저 프로필 타입 설계  

### Day 14 (TS: 제네릭 & 유틸리티 타입)
- [ ] 제네릭 함수, 제네릭 인터페이스  
- [ ] Partial, Pick, Omit 같은 유틸리티 타입  
- **실습:** 제네릭으로 Stack 구현  

---

## 3주차 (React 입문)

### Day 15 (환경 세팅 & JSX)
- [ ] Vite + React + TS 프로젝트 세팅  
- [ ] JSX 문법 기초  
- **실습:** “Hello React” 출력  

### Day 16 (컴포넌트 기초)
- [ ] 함수형 컴포넌트 작성법  
- [ ] props 전달 & 타입 지정  
- **실습:** Greeting 컴포넌트 (이름 받아서 출력)  

### Day 17 (State & 이벤트)
- [ ] useState 기본  
- [ ] 이벤트 핸들링(onClick 등)  
- **실습:** 카운터 앱 만들기  

### Day 18 (조건부 & 리스트 렌더링)
- [ ] 조건부 렌더링 (&&, 삼항연산자)  
- [ ] map으로 리스트 렌더링  
- **실습:** Todo 리스트 출력  

### Day 19 (컴포넌트 구조화)
- [ ] 컴포넌트 분리  
- [ ] key 속성 이해  
- **실습:** TodoItem 분리  

### Day 20 (useEffect 활용)
- [ ] 마운트/언마운트 개념  
- [ ] 의존성 배열(deps)  
- **실습:** API 호출해서 데이터 불러오기  

### Day 21 (미니 프로젝트 v1)
- [ ] Todo CRUD 구현  
- [ ] 로컬 상태만으로 동작  

---

## 4주차 (React 심화 + 프로젝트)

### Day 22 (Context API)
- [ ] props drilling 문제  
- [ ] useContext로 전역 상태 공유  
- **실습:** 다크모드 토글  

### Day 23 (라우팅)
- [ ] React Router v6 설치 & 기본 사용법  
- [ ] 라우트 간 이동(Link, useNavigate)  
- **실습:** Todo 앱에 상세 페이지 추가  

### Day 24 (프로젝트 확장)
- [ ] CRUD 정리  
- [ ] 스타일링 (CSS 모듈 or styled-components)  
- **실습:** Todo 앱 완성  

### Day 25 (최종 회고 & 정리)
- [ ] 배운 내용 마인드맵 정리  
- [ ] 프로젝트 코드 리팩토링  
- [ ] GitHub에 올리기 & README 작성  
