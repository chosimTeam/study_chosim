// #9 switch문
let fruit = prompt("무슨 과일을 사고 싶나요?");

switch (fruit) {
  case "사과":
    console.log("100원입니다");
    break;
  case "바나나":
    console.log("200원입니다.");
    break;
  case "커피":
    console.log("200원입니다.");
    break;
  default:
    console.log("그런 과일은 없습니다.");
}
//break가 없으면 이후 모든 코드를 실행함.
//default가 없으면 해당하지 않는 입력값일 때, 아무일도 발생하지 않기 때문에
//사용자 입장에서 제대로 동작한건지, 오류가 난건지 알 수가 없음.

switch (fruit) {
  case "사과":
    console.log("100원입니다");
    break;
  case "바나나":
  case "커피":
    console.log("200원입니다.");
    break;
  default:
    console.log("그런 과일은 없습니다.");
} //현재, 바나나와 커피의 경우 같은 실행문이므로,break 없애고 중복 생략하기
