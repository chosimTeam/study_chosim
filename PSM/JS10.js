///#10 함수의 기초
/**
function sayHelllo(name){
console.log(`Hello, ${name}`);}
함수 함수명 매개변수
**/

function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
}
showError();

function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello("Mike");
sayHello("Tom");
sayHello("Jane");

//전역 변수와 지역 변수
let msg = "welcome";
console.log(msg); //"welcome"

function sayHello(name) {
  let msg = "Hello";
  console.log(msg + " " + name);
}
sayHello("Mike"); //"Hello Mike"
console.log(msg); //"Welcome"

let name = "Mike";
function sayHello(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(name);
}
sayHello(); //"Hello, frined"
sayHello("Jane"); //"Hello, Jane"

//매개변수가 없을 때는 기본값 할당
function sayHello2(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello(); //"Hello, frined"
sayHello("Jane"); //"Hello, Jane"

//return으로 값 변환 -반환 후 함수 종료.
function add(num1, num2) {
  return num1 + num2;
  console.log("이 코드는 절대 실행되지 않는다");
}
const result = add(2, 3);
console.log(result); //5

//return문이 없는 함수도 항상 undefined를 반환함
function showError() {
  alert("에러가 발생했습니다.");
  //return -이렇게 리턴만 있어도 undefined 반환.
}
const result = showError();
console.log(result);
