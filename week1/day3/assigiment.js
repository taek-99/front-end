
/*
function calculate(a, b, operator='+'){
    switch(operator){
        case'+': return a+b;
        case'-': return a-b;
        case'*': return a*b;
        case'/': return a/b;
        default: return"지원하지 않는 연산";
    }

}

alert(calculate(5, 3, '+')); // 8
alert(calculate(5, 3, '-')); // 2
alert(calculate(5, 3));      // 8 (기본값 + 사용)
alert(calculate(5, 3, '*')); // 15
alert(calculate(10, 2, '/'));// 5
*/


let add = (a, b) => {
    return a+b;
}


alert(add(3,7));