# Day15

## TypeScript

- 자바스크립트에서 타입을 선언해서 오류를 줄여주는 문법

- 타입검사를 엄격히 해줌

- 에러메시지 퀄리티가 많이 올라감

- 사용 법

    - npm install -g typescript 설치

    - '~~~.ts로 파일 생성

    - tsconfig.json 파일 생성

    - 
    {   
        "compilerOptions" : {     
            "target": "es5",     
            "module": "commonjs",  
        } 
        }
    
    붙여넣기

    -  tsc -w

    - 하면 ts파일에서 작성한 내용 js로 알아서 변환됨

- 타입 지정 목록

    - string

    - number

    - boolean

    - null

    - undefined

    - bigint

    - [], {} 

    - 기타 등등

- 타입도 별도로 설정 가능

    - 대문자로 시작하는게 관례

- 오 자바스크립트는 튜플 있다
