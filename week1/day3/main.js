/* 함수 선언
function pow(x, y){

    alert(x**y)
}

pow(3, 2)
pow(3, 3)
pow(1, 100)
*/


// 함수 표현
// function sayhi(){
//     alert("hi")
// }

// let func = sayhi;

// func();
// sayhi();



// 콜백 함수
// function ask(question, yes, no){
//     if (confirm(question)) yes()
//     else no();

// }


// ask(
//     "동의하십니까?",
//     function() {alert('동의했따');},
//     function() {alert('동의안했했따');}
// )



// // 함수 선언문
// function sun(a, b){
//     return a+b
// }

// // 함수 표현식
// let ssum = function(a, b){
//     return a+b
// }


// let sum = (n) => n**n;


// for (let i = 1; i < 6; i++) {
//     alert(sum(i))

// }


function ask (question, yes, no) {
    if (confirm(question)){
        yes();
    }else{
        no();
    }
}

ask('동의하니', () => alert('dd'), () => alert('ss'))