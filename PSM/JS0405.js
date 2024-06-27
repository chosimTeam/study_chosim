//#4-형변환
//자동형변환
console.log(10 / 5); //2
console.log("9040" / 2); //4520
console.log("6" / "2"); //3 자동 형변환->원인을 찾기 힘은 에러 발생 가능성

//명시적 형변환
//String()-> 문자형으로 변환
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
); //3 true false null undefined

//Number()-> 숫자형으로 변환, Number('문자(숫자가아닌문자)')=NaN
console.log(Number("1234")); //1234
console.log(Number("123asd")); //NaN

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

//Boolean() ->불린형으로 변환
//false: 숫자 0 , 빈 문자열 '', null , undefined, NaN
//이외에는 모두 true반환
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
); //false false false false false

console.log(Boolean(123)); ///true

//주의!!
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Boolean(0)); //false
console.log(Boolean("0")); //true

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true

//#5-기본 연산자
let num = 10;
num += 5; // num = num+5
console.log(num); //15

//증가, 감소 연산자
num = 10;
num++;
console.log(num); //11

num = 10;
let result = num++;
console.log(result); //10

num = 10;
result = ++num;
console.log(result); //11
