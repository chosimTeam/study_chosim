/**
 * var는 한번 선언된 변수를 다시 선언 가능
 * 
 * let은 한번 선언된 변수를 다시 선언 불가능
 * 
 * const도 한번 선언된 변수를 다시 선언 불가능
 */

// var
var a = "a";
console.log(a); //a
var a = "b";
console.log(a); //b

// let
let b = "a";
console.log(b); //a
// let b = "b";
// console.log(b); error

console.log(name_var); //undefined
var name_var = "a";
/* 호이스팅으로 인해
선언 -> 출력 -> 할당 순으로 진행되기 때문에...
다만 undefined가 뜬다.
var name_var; 
console.log(name_var); //undefined
name_var = "a";
 */


// console.log(name_let);
// let name_let = "a";
// error!

/**
 * 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된다.
 * Temporal Dead Zone
 * TDZ 영역의 변수는 반드시 초기화되어 새로 받은 값이 사용 가능
 * 따라서 var는 초기화 되어 새롭게 만들어져 TDZ에서 사용되지만,
 * let과 const는 초기화 및 할당이 모두 한번에 일어나야 하는 변수로서 TDZ에서 사용 불가
 */


/**
 * 변수 생성 과정
 * 선언 -> 초기화 -> 할당
 * 
 * var는 선언과 초기화를 한번에 하고, 할당을 한다.
 * let은 선언과 초기화 그리고 할당 모두 따로 진행된다.
 * const는 선언과 초기화 할당 모두 한번에 진행된다.
 * 
 * 따라서 var와 let은 선언만 가능하지만 const는 선언만 하는 것이 불가능 할당도 해줘야 함
 */

/**
 * var: 함수 스코프
 * let, const: 블록 스코프
 * 
 * if 문 안에서 생성된 var는 외부에서도 사용 가능
 * 그러나 let과 const는 외부에서 사용 불가능(블록 안에서만)
 * 반면에 함수 안에서 생성된 var는 외부에서 사용 불가!
 */