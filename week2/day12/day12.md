# Day12

## 페이지 불러오기

- json 파일 불러와서 화면에 보이기

- 기존 .then 방식에서 async-await 방식으로 업그레이드

    - 가독성 증가

## 리엑트 라우터

- npm install react-router-dom 설치

- import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom";

- useParams

    - url의 id를 가져올수 있음

## useEffect와 useLayoutEffect 차이

- useEffect

    - 비동기적으로 동작

    - DOM 업데이트 후에 실행

- useLayoutEffect

    - 동기적으로 동작

    - 렌더링 전에 특정 행동을 수행하도록 만들어줌
