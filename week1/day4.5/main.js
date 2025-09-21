

// let str = 'Hello';

// alert(str.toUpperCase());
// alert(str)


// let num = 10;

// alert(num.toString(16));
// alert(num.toString(8));

// alert(10..toString(4));
// alert(random(1, 10));



// let guest = 
// `손님: 
// 일
// 이
// 삼
// `;

// alert(guest);


// for (let a of 'qwerasdf') {
//     alert(a);
// }


// function ucFirst(str){
//     let newStr = str[0].toUpperCase() + str.slice(1);
//     return newStr
// }


// alert(ucFirst('asd'));


// function checkSpam(str){
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('xxx')
// }


// alert(checkSpam('sdfhkjshxxxdfkj'))
// alert(checkSpam('sdfhkjsdfkj')) 
// alert(checkSpam('sdhxxxdfkj'))


// let arr = ['q','w','e','r'];
// let arr2 = ['a','b','c'];

// // arr.splice(0, 2, 'aa', '55');
// // alert(arr)

// // alert(arr.slice(1,2))
// // alert(arr.slice(1,4))


// arr.forEach(alert)

// let users =[
//     {id: 1, name:'aa'},
//     {id: 2, name:'bb'},
//     {id: 3, name:'cc'},
// ]

// let user = users.find(item => item.id == 2);

// alert(user.name)

// let user = users.filter(item => item.id < 3);

// alert(user);


// arr = ['q', 'w', 'e', 'r']

// let result = arr.map(item => item.toUpperCase());
// alert(result)


let arr = [1,2,3,4,5];

let result = arr.reduce((sum, current) => sum + current, 5);

alert(result)