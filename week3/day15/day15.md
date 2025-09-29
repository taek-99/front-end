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

# Day16

## 타입스크립트

Types of TS(기본)
✅ 배열: 자료형[]
✅ 숫자: number
✅ 문자열: string
✅ 논리: boolean
✅ optional
const player : {
    name: string,
    age?:number
} = {
    name: "nico"
}

❌ player.age가 undefined일 가능성 알림
if(player.age < 10) {
}

⭕ player.age가 undefined일 가능성 체크
if(player.age && player.age < 10) {
}

❗ ?를 :앞에 붙이면 optional

✅ Alias(별칭) 타입
type Player = {
    name: string,
    age?:number
}

const player : Player = {
    name: "nico"
}

⭐ 함수에서는 어떻게 쓸까
type Player = {
    name: string,
    age?:number
}

function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker1("nico")
nico.age = 12


void
void는 값을 반환하지 않는 함수의 반환 값을 나타냅니다. 함수에 return 문이 없거나 해당 return 문에서 명시적 값을 반환하지 않을 때 항상 유추되는 타입입니다.
```
// The inferred return type is void
function noop() {
return;
}
```
unknown
unknown타입은 모든 값을 나타냅니다. 이것은 any타입과 비슷하지만 any보다 unknown이 더 안전합니다. 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않기 때문입니다.
```
function hello(a: any) {
a.b(); // OK
}

function hello2(a: unknown) {
a.b(); // 에러: Object is of type 'unknown'.
}
```
never
일부 함수는 값을 반환하지 않습니다.
이는 함수가 예외를 throw하거나 프로그램 실행을 종료함을 의미합니다.
```
function fail(msg: string): never {
throw new Error(msg);
}
```
https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown