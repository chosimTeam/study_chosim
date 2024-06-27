//#6- 비교 연산자, 조건문
const a = 1;
const b = "1";

console.log(a == b); //true, 동등연산자(==)
console.log(a === b); //false, 일치연산자(===): 타입까지 비교해줌

const age = 19;
if (age > 19) console.log("환영합니다"); //코드가 한 줄이면 중괄호 생략 가능
//(불린형으로 변환된 뒤 판단됨)
else if (age === 19) {
  console.log("수능 잘치세요.");
} else {
  console.log("안녕히 가세요");
}
