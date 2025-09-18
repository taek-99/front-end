/*
A 강조하기
function solution(myString) {
    var answer = '';
    for (let str of myString){
        if (str=='a') {
            answer += 'A';
        }else if(str == "A"){
            answer += 'A';
        }else{
            answer += str.toLowerCase();
        }

    }
    return answer;
}


const solution=s=>s.toLowerCase().replaceAll('a','A');

*/