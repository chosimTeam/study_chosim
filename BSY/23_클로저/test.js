 
 let one;
 one = 1;

 function addOne(num) {

    console.log(one + num);
 }

 addOne(5);

 /**
  * 어휘적 환경 (Lexical Environment)
  * 
  * 1<전역>
  * one : 초기화 x 사용불가
  * addOne: function 초기화 O
  * 
  * 2<전역>
  * one : undefined
  * addOne: function 초기화 O
  * 
  * 3<전역>
  * one : 1
  * addOne: function 초기화 O
  * 
  * 4-8<전역>
  * one : 1
  * addOne: function 초기화 O
  * 
  * 9<내부>
  * num : 5 (새로운 렉시컬 환경 생성)
  * 
  * 내부에서 설정된 변수 찾는 순서 내부-> 상위 -> 전역
  */

 function makeAdder(x) {
    return function (y) {
        return x + y;
    }
 }
 const add3 = makeAdder(3);

 console.log(add3(2));
 console.log(add3(5));
 /**
  * 전역 렉시컬
  * makeAdder : function 선언 + 초기화
  * add3 : const 선언+초기화+할당
  * 현재는 호이스팅 상태
  * 
  * add3의 할당값으로 내부 렉시컬 생성 (makeAdder)
  * x : 3
  * 
  * console.log 실행부를 통해 add3(2) 실행 및 또다른 내부 렉시컬 생성 (익명함수)
  * y : 2
  * 
  * 참조 + 참조 = 5 출력
  */

 /**
  * 클로저 (Closure)
  * 함수와 렉시컬 환경의 조합
  * 함수가 생성될 당시의 외부 변수를 기억
  * 생성 이후에도 계속 접근 가능
  */

 console.log(add3(10));
 console.log(add3(100));

 function cnt () {
    let num = 0;
    return function () {
        return num++;
    }
 }
 let counter = cnt();

 console.log(counter()); // 0
 console.log(counter()); // 1
 console.log(counter()); // 2