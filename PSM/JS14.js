//#14 배열
//벼을은 문자뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음.
let arr = [
  "민수",
  3,
  false,
  { name: "Mike", age: 30 },
  function () {
    console.log("TEST");
  },
];

//length: 배열의 길이
students.length; //30(요소 개수 반환)

//push(): 배열 끝에 추가
let days = ["월", "화", "수"];
days.push("목");
console.log(days); //['월','화','수','목']

//pop(): 배열 끝에 요소 제거
days = ["월", "화", "수"];
days.pop();
console.log(days); //['월','화']

//shift, unshift 배열 앞에 제거/추가 -여러 요소 가능
//<추가>
days.unshift("금", "토", "일");
console.log(days); //['금','토','일','월','화','수'];
//<제거>
days.shift();
console.log(days); //['월','화','수'];

//반복문: for
days = ["월", "화", "수"];
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

//반복문: for .. of -배열도 객체이므로 for..in도 쓸 수 있지만 단점 많음
days = ["월", "화", "수"];
for (let day of days) {
  console.log(day);
}
