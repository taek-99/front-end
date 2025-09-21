# day9

## Props

- 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보내주는 방법

- 함수에 인자를 받아오는 법

    - function Btn(props)

        - 안에서 사용시 {props.text}로 사용

    - function Btn({text})

        - 안에서 사용시 {text}로 사용

        - 더 편함

- memo를 사용하면 props가 변화가 없으면 리렌더링을 건너띔

- 실수로 다른 타입을 보낼때 설정

    1. 리액트는 파라미터를 잘 못 넘겨도 확인할 수 없는 문제점이 존재한다.
    2. 이런 문제를 줄이기 위해서 PropTypes라는 모듈의 도움을 받을 수 있다.
    3. type과 다르게 입력 되엇을 경우 warning을 뜨게 할수 있고, parameter 에 값을 넣지 않는 경우 경고 메시지를 띄울수 있다.

    - https://unpkg.com/prop-types@15.7.2/prop-types.js 스크립트 연결

    - isrequired를 쓰면 필수로 값을 넘겨줘야함

- CSS 모듈화