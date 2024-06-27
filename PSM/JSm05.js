//#5 - 숫자, 수학
//toString() 10진수(우리가 실생활에서 쓰는 수)->2진수/16진수(색상을 다룰 때 16진수)
let num = 10;
num.toString(); //'10'
num.toString(2); //"1010" -10을 2진수로 나타낸 것

let num1 = 255;
num1.toString(16); //'ff' -16진수로

Math.PI; //3.141592~ -원주율을 보여줌

//Math.ceil(): 올림
let num3 = 5.1;
let num4 = 5.7;

Math.ceil(num3); //6
Math.ceil(num4); //6

//Math.floor(): 내림
Math.floor(num3); //5
Math.floor(num4); //5

//Math.round(): 반올림
Math.round(num3); //5
Math.round(num4); //6

//소수점 자릿수: toFixed()
let userRate = 30.1234;
//요구사항: 소수점 둘째자리까지 표현(셋째 자리에서 반올림)
Math.round(userRate * 100) / 100; //30.12 -100을 곱하고 반올림한 뒤 다시 100나누기

userRate.toFixed(2); //"30.12"
userRate.toFixed(0); //"30" -소수부 개수가 0이니 당연히 정수부만 남는다.
userRate.toFixed(6); //"30.123400" -소수부 개수보다 큰 수를 넣으면 0으로 채워준다.
//문자열을 반환하는 점 주의
Number(userRate.toFixed(2)); //30.12

//isNaN() -NaN인지 아닌지 검사할 수 있는 유일 방법
let x = Number("x"); //NaN
x == NaN; //false
x === NaN; ///false
NaN == NaN; //false

isNaN(x); //true
isNaN(3); //false

//parseInt() -Number와 다른 점은 문자가 혼용되어 있어도 동작함
let margin = "10px";
parseInt(margin); //10 -읽을 수 있는 데까지 읽음
Number(margin); //NaN

let redColor = "f3";
parseInt(redColor); //NaN -숫자로 시작하지 않았기 때문

//두 번째 인수에 변환될 진수를 지정하면 10진수로 반환해줌.
parseInt(redColor, 16); //243 -두 번째 인수로 진수 지정 가능.
//redColor가 16진수임을 의미!!!! 이 16진수를 10진수로 바꾸는 것!!!!

parseInt("11", 2); //3

//parseFloat() -pasreInt()와 똑같이 동작하지만 부동소수점을 반환
let padding = "18.5%";
parseInt(padding); //18 -소수점이하는 무시하고 정수만 반환
parseFloat(padding); //18.5

//Math.random(): 0~1 사이 무작위 숫자 생성
//1~100사이의 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random() * 100) + 1; //버림을 했을 때 0.0이 나올수도 있기 때문에 최솟값 1을 더해줌(1부터 100까지를 만들고 싶은거니까)

//Math.max() / Math.min() -괄호 안의 인수 중 최대, 최소
Math.max(1, 4, -1, 5, 10, 9, 5.54); //10
Math.min(1, 4, -1, 5, 10, 9, 5.54); //-1

//Math.abs(): 절댓값
Math.abs(-1); //1

//Math.pow(n,m): 제곱 (power의 약자)
Math.pow(2, 10); //1024

//Math.sqrt(): 제곱근 (square root의 약자)
Math.sqrt(16); //4
