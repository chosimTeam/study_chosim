//#11 함수 선언문 vs 함수 표현식

//함수 선언문: 어디서든 호출 가능
sayHello(); //'Hello'
function sayHello() {
  console.log("Hello");
}
//JS는 실행 전, 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 생성해놓는다.
//즉, 함수선언문의 사용 가능 범위가 코드 위치보다 위로 올라가게 됨(가상)->호이스팅

//함수 표현식: 코드에 도달하면 생성 ->그후 사용가능
let sayHello = function () {
  console.log("Hello");
};
sayHEllo();

//화살표 함수(arrow function)
let add = (num1, num2) => {
  return num1 + num2;
};
//코드 본문이 한 줄이고 return문이 있는 경우, retutn문은 중괄호가 아닌 일반 괄호로 바꿀 수 있다.
let add2 = (num1, num2)=>(num1 + num2;)
//return문이 한 줄이라면 괄호도 생략 가능
let add3 = (num1,num2)=>num1 +num2;
//인수가 하나라면 괄호 생략 가능
let sayHello = name => `Hello, ${name}`;
//인수가 없으면 괄호 생략 불가
let showErro = () => {
    alert('error!');
}
//return문 전에 여러 줄의 코드가 있을 경우 일반 괄호 불가
let add4= function(num1,num2){
    const result = num1 + num2;
    return result;
}

