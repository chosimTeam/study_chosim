/**
 * Destructuring assignmnet
 *구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 
 그 값을 변수에 담을 수 있게 하는 표현식
 */

//배열 구조 분해
let [x, y] = [1, 2];
console.log(x); //1
console.log(y); //2

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
console.log(user1, user2, user3); //Mike Tom Jane

let str = "Mike-Tom-Jane";
[user1, user2, user3] = str.split("-");
console.log(user1, user2, user3); //Mike Tom Jane

//기본값
let [a, b, c] = [1, 2];
console.log(a, b, c); //1 2 undefined

[a = 3, b = 4, c = 5] = [1, 2];
console.log(a, b, c); //1 2 5

//일부 반환값 무시(공백과 쉼표를 활용하여)
[user1, , user2] = ["Mike", "Tom", "Jane", "Tony"];
console.log(user1, user2); //Mike Jane

//바꿔치기(임시변수필요없음)
a = 1;
b = 2;
[a, b] = [b, a];
console.log("a=", a, ",b=", b);

//객체 구조 분해 -순서를 바꿔도 됨
user = { name: "Mike", age: 30 };
let { age, name } = user;
console.log(name, age); //Mike 30

//새로운 변수 이름으로 할당
user = { name: "Mike", age: 30 };
let { name: userName, age: userAge } = user;
console.log(userName, userAge); //Mike 30

//기본값(undefined일 경우만)
user = { name2: "Mike", age2: 30 };
let { name2, age2, gender } = user;
console.log(name2, age2, gender); //Mike 30 undefined
//gender ='male'등으로 기본값을 주면 됨
