

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


// let user = {
//     name:'taek',
//     age:30,

//     sayhi() {
//         alert(this.name);
//     }
// }

// let admin = user;
// user = null;

// admin.sayhi();


// let person ={
//     name: 'taek',
//     greet(){
//         alert("ㅎㅇ" + this.name);
//     },
//     red(){
//         alert("ss"+this.name);
//     }
// }


// person.greet();
// person.red();



// let user = {
//     firstname : 'taek',
//     sayhi() {
//         let arrow = () => alert(this.firstname);
//         arrow();
//     }
// };

// user.sayhi();


// let calculator ={
//     read(){
//         this.a = +prompt("숫자 입력히세여1");
//         this.b = +prompt("숫자 입력히세여2");
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a*this.b;
//     }

// }

// calculator.read();
// alert( calculator.sum());
// alert( calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function(){
//         alert(this.step);
//         return this;
//     }
// }

// ladder.up().up().showStep();



// function User(name) {
//     this.name = name;
//     this.age = 5;
// }

// let user = new User('TAEK');

// alert(user.name);
// alert(user.age);


// let user ={
//     name: 'TAEL',
// }


// let aa = {};

// function A() {
//     return aa;
// }

// function B() {
//     return aa;
// }

// let a = new A;
// let b = new B;

// alert(a == b);



// function User(name) {
//     this.name = name;

//     this.sayhi = function() {
//         alert('내 이름은' + this.name + '이다');
//     }
// }

// let bora = new User('ss');

// bora.sayhi();


// function Calculator(){

//     this.read = function(){
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };

//     this.sum = function(){
//         return this.a + this.b;
//     };

    
//     this.mul = function(){
//         return this.a * this.b;
//     };
// }


// let calculator = new Calculator();

// calculator.read();
// alert('sum' + calculator.sum());
// alert('mul' + calculator.mul());

// function Accumulator(a){
//     this.value = a;

//     this.read = function() {
//         this.value += +prompt('숫자 입력하시오');
//     };
// }



// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);


// let user = {
//     name: 'taek'
// };

// let id = Symbol('id');

// user[id] = 1;

// alert(user[id]);


alert(obj);

anotherobj[obj] = 123;
