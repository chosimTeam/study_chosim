//#1 -변수, 호이스팅, TDZ

// var는 한번 선언된 변수 다시 선언 가능
var name = "Mike";
console.log(name); //Mike
var name = "Jane";
console.log(name); //Jane

var name = "Mike";
console.log(name); //Mike
var name = "Jane";
console.log(name); //Error!

//var는 선언하기 전에 사용 가능
console.log(name); //undefined
var name = "Mike";

//var로 선언한 모든 변수는 코드가 실제로 이동하진 않지만 최상위로 끌어 올려진 것처럼 동작=>호이스팅
var name;
console.log(name); //undefiend -선언만 호이스팅되고 할당은 호이스팅 안 됨
name = "Mike"; //할당

/**
 * let과 const도 호이스팅되긴 함!!!
 * 호이스팅: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
 *그런데 왜 에러가 발생하지? TDZ(Temporal Dead Zone) 내에 있는 변수들은 사용 불가
 *let과 const는 TDZ의 영향을 받는다. 할당을 하기 전에는 사용 불가
 *코들를 예측가능하게 하고 잠재적인 버그를 줄일 수 있음.
 */
console.log(name); //ReferenceError -TDZ
let name = "Mike"; //함수 선언 및 할당
console.log(name); //사용 가능

//호이스팅은 스코프 단위로 일어남
let age = 30;
function showAge() {
  //함수 내부 스코프
  console.log(age); //Error (TDZ) 만약 호이스팅 되지 않았다면 30이 찍혔겠지
  let age = 20;
}
showAge();

/**
 *<변수의 생성과정>
 1.선언 단계
 2.초기화 단계(undefined를 할당 해주는 단계)
 3.할당 단계
 var: 선언과 초기화가 동시에 된다.(1.선언 및 초기화 단계->2.할당 단계)
 let: 선언과 초기화 단계가 분리돼서 진행.(1.선언2.초기화3.할당)
 호이스팅되면서 선언 단계가 이루어지지만, 
 초기화 단계는 실제 코드에 도달했을 때 이루어지므로 reference error 발생
 cons: 선언과 할당 동시에 (1.선언+초기화+할당) vs let과 var는 선언만 하고 나중에 할당 허용(값을 바꿀 수 있는 특징)
 */
let name;
var age2;
const gender; //에러- 선언하면서 바로 할당을 안 해서

//var: 함수 스코프 -함수 내부에서 선언된 변수만 지역 변수가 됨.(유일하게 벗어날 수 없는 스코프가 함수라고 생각하면 됨)
//let, const: 블록 스코프 -블록 내에서 선언된 변수는 블록 내에서만 유효. 외부에서는 접근 불가. 
//즉, 코드 블록 내부에서 선언한 변수는 지역변수인 것. 코드 블록: 함수, if, for, while, try/catch문 등


const age3 = 30;
if (age3>19){
  var txt ='성인';
}
console.log(txt) //'성인'


function add(num1, num2){
  var result = num1 + num2;}
  add(2,3);
  console.log(result); //에러