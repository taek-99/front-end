

// let user = {
//     nnn : 'take',
//     age : 30,
// }

// alert(user.nnn);
// alert(user.age);

// let user = {
//     nnn : 'taek',
//     age : '27',
// }

// let key = prompt('사용자의 무슨 정보를 얻고싶니','nnn');

// alert(user[key]);


// function makeUser(name, age){
//     return {
//         name,
//         age,
//     }
// }

// let user = makeUser('taefghk', 30);
// alert(user.name);
// alert(user.age);


// let user = {name:'taek', age:'30'};

// alert('age' in user);


// let user = {
//     a : 'aa',
//     b : 'bb',
//     c : 'cc',
// }


// for (const key in user) {

//     alert(key);
//     alert(user[key]);
    
// }


// user = {
//     name:'john',
//     surname:'smith',
// };

// alert(user.name)

// user.name = 'peter';

// alert(user.name)

// delete user.name;

// alert(user.name)


// let price = {
//     a:100,
//     b:200,
//     c:300,
// }

// let d = 0;
// for (let key in price) {
//     alert(price[key])

//     d += price[key];
// }

// alert(d)


// let user = {
//     name: 'tt',
//     age: 30,
// }

// let clone = {};

// for (let key in user){
//     clone[key] = user[key];
// }

// clone.name = 'aa';

// alert(user.name);
// alert(clone.name);


let user = {
    name:'taek',
    age:30,

    sayhi() {
        alert(this.name);
    }
}

let admin = user;
user = null;

admin.sayhi();

