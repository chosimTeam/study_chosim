//어휘적 환경(Lexical Environment)

function makeAdder(x) {
  return function (y) {
    //y를 가지고 있고 상위함수인 makeAdder의 x에 접근 가능

    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); //5
//add3함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

const add10 = makeAdder(10);
console.log(add10(5)); //15
console.log(add3(1)); //4 -add10과 add3은 서로 다른 환경을 가지고 있음

//Closure: 함수와 그 함수의 렉시컬 환경의 조합, 함수가 생성된 당시의 외부 변수를 기억, 생성 이후에도 그 변수에 계속 접근 가능
//외부 함수의 실행이 끝나서 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근 가능

function makeCounter() {
  let num = 0; ///은닉화
  return function () {
    return num++;
  };
}
let counter = makeCounter();
console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2
