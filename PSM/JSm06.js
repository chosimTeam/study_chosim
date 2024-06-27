//#6-문자열 메소드

//백틱은 여러줄을 포함할 수 있다. 만약 따옴표를 쓴다면 한 줄에 써야 하고 \n을 써야 함.
let sentence = `오늘은 맑고 화창한
날씨가'
계속 되겠습니다.`;
let sentence2 = "오늘은 맑고 화창한\n날씨가 계속 되겠습니다.";

//length: 문자열 길이
let desc = "안녕하세요.";
desc.length; //6

//특정 위치에 접근
desc[2]; //'하'

desc[4] = "용"; //배열과 다르게 한 글자만 바꾸는 거 허용하지 않음
console.log(desc); //안녕하세요
//toUpperCaes() / toLowerCase()
let line = "Hi guys.";
line.toUpperCase(); //'HI GUYS.'
line.toLowerCase(); //'hi guys.'

//str.indexOF(text) -공백까지 포함해서 센다!!
line.indexOf("to"); //14 ()
line.indexOf("man"); //-1  찾는 문자가 없을 경우 (-1은 true임)

//포함된 문자가 여러 개라도 첫 번째 위치만 반환함
if (line.indexOf("Hi")) {
  //0으로 false가 되어버리는 문제!
  console.log("Hi가 포함된 문장입니다.");
}

if (line.indexOf("Hi") >= -1) {
  console.log("Hi가 포함된 문장입니다.");
}

//includes: 문자가 있으면 true, 없으면 false 반환 -굳이 index로 판단하지 않고 문자 유무만 판단 시 유용

if (line.includes("Hi")) {
  console.log("Hi가 포함된 문장입니다.");
}

//str.slice(n,m) -n: 시작점,  m: 없으면 문자열 끝까지, 양수면 그 숫자까지(미포함), 음수면 끝에서부터 센다.
let ex = "abcdefg";
ex.slice(2); //'cdefg'
ex.slice(0, 5); //'abcde'
ex.slice(2, -2); //'cde'

//str.substring(n,m) - n과 m 사이 문자열 반환, n과 m을 바꿔도 동작함, 음수는 0으로 인식
//끝은 미포함
ex.substring(2, 5); //'cde'
ex.substring(5, 2); //'cde'

//str.trim(): 앞 뒤 공백 제거
let ex2 = "   coding       ";
ex.trim(); //'coding'

//str.repeat(n): n번 반복
let hello = "hello!";
hello.repeat(3);
("hello!hello!hello!");

//문자열 비교
1 < 3; //true
"a" < "c"; //true
"a".codePointAt(0); //97  (아스키코드 - a<z, 대문자<소문자)
String.fromCodePoint(97); //'a'
