# Nextjs

## React vs Nextjs
- 리엑트는 라이브러리
- 넥스트제이에스는 프레임워크

## 시작법
- npm init -y
- package.json 파일의 라이센스 MIT로 변경
- npm install react@latest next@latest react-dom@latest
<!-- - npx create-next-app@latest my-app -->
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
