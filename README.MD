# 📅 프론트엔드 학습 로드맵 (2025.09 ~ 2025.10.10)

## 1주차 (JavaScript 기초)

### Day 1 (JS 기초: 변수 & 타입)

  - var, let, const 차이 이해  
  - 기본 자료형(number, string, boolean, null, undefined, symbol)  
  - 동적 타이핑 특성 확인  

### Day 2 (조건문 & 반복문)
  - if, switch 문 차이  
  - for, while, for...of, for...in  
  - break, continue 동작 확인  

### Day 3 (함수 & 스코프)

  - 함수 선언식 vs 표현식 vs 화살표 함수  
  - 매개변수 기본값, Rest, Spread  
  - 블록 스코프, 함수 스코프, 전역 스코프  

### Day 4 (배열 & 객체)

  - 배열 메서드(map, filter, reduce, find, some, every)  
  - 객체 구조분해할당, 스프레드 문법  

### Day 5 (React 기초)

  - HTML 파일에 React js, ReactDOM, JSX 연결
  - 이벤트 동작들 실습

### Day 6 (js 함수 심화 학습)

  - 함수를 재귀, 클로저, 렉시컬 환경을 통한 변수 스코프 활용
  - setTimeout, setInterval로 비동기 실행, 화살표 함수는 this와 arguments x
  - call, apply등 캐싱
  - 프로퍼티 사용, new Function
  
### Day 7 (React 실습)

  - 다양한 이벤트 사용
  - React 라이브러리 설치하여 사용
  - 컴포넌트 생성

## 2주차 (React & vite 기초)

### Day 8 (React 실습)

  - 컴포넌트 순수하게 유지하기
  - useState 사용하여 상호작용 추가
  - 렌더링 과정 학습


### Day 9 (React 실습)

  - 인자 전달시 children방식과 props방식의 차이
  - 3x3~6x6의 최단거리 시뮬레이션 제작
  - toggle 버튼, locked거는법 학습

### Day 10 (React 실습)

  - Cleanup 방식 학습
  - useEffect 학습

### Day 11 (React 실습)

  - 리스트와 map 활용
  - 명령형 UI와 선언형 UI 학습
  - 이번에야말로 오목판 만들어보기 도전

============================================================

## React 연결 방법

- CDN
  - https://unpkg.com/react@17.0.2/umd/react.production.min.js
  - https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js
  - https://unpkg.com/@babel/standalone/babel.min.js

- React Vite
  - npm create vite@latest

- propType 설정

  - npm install prop-types
  - import PropTypes from "prop-types";