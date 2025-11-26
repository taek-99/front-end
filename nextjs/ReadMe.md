# Nextjs

## React vs Nextjs
- 리엑트는 라이브러리
- 넥스트제이에스는 프레임워크

## 시작법
- npm init -y
- package.json 파일의 라이센스 MIT로 변경
- npm install react@latest next@latest react-dom@latest
- npx create-next-app@latest .
- package.json 파일의 script 부분 "dev": "next dev"로 변경
- app 폴더에 page.tsx 만들기

## 렌더링
- Next.js가 리액트 컴포넌트를 브라우저가 이해할 수 있는 html로 변환하는 작업

- CSR
모든 렌더링이 클라이언트 측에서 발생
브라우저는 서버로부터 HTML 껍데기와 자바스크립트 번들 파일을 받아 UI를 빌드함

- SSR
브라우저의 요청이 있을 때마다 서버에서 HTML을 생성하고, 반환함

- Next.js에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨

## use client
- 서버와 클라이언트 컴포넌트 모듈 간의 경계를 선언하는 데 사용
-  하위 컴포넌트를 포함하여 해당 파일로 가져온 다른 모든 모듈이 클라이언트 번들의 일부로 간주

## Layout
- Navbar나 footer같은 모든 페이지에 공통으로 필요한 부분들을 Layout으로 빼서 관리 가능

## metadata
- Layout과 비슷하지만 metadata로 중첩되는 요소는 병합되어 나타남
- template와 default값 설정 가능


## Promise.all()
- Promise.all()는 자바스크립트에서 여러 비동기 작업을 동시에 실행하고, 모든 작업이 완료될 때까지 기다렸다가 결과를 배열 형태로 반환하는 함수입니다. 쉽게 말해, 여러 Promise를 모두 이행할 때까지 기다린 후, 그 결과를 한꺼번에 받아볼 수 있게 해줍니다.