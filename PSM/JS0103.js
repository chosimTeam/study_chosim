#1-변수

문자는 꼭 따옴표로 감싸준다
예약어는 변수명으로 사용 불가 ex) class

let은 한 번 선언 후 다른 값으로 변경 가능
let grade = "F";
grade = "A+";

const: 절대로 바뀌지 않은 상수(수정x)

1) 변수는 문자와 숫자, $와 _만 사용
2) 첫글자는 숫자가 될 수 없다.
3) 예약어는 사용할 수 없다.
4) 가급적 상수는 대문자로 알려주자
5) 변수명은 읽기 쉽고 이해할 수 있게

console.log("-------------------------");

//#2-자료형
const name1 = "Mike"; //문자형 String
const name2 = "Mike";
const name3 = `Mike`;

const message = "I;m a boy.";
const message2 = "I'm a boy."; //역슬래시(\)를 앞에 넣어주면 특수문자로 인식

const message3 = `My name is ${name1}.`;
const message4 = `나는 ${30 + 1}살 입니다.`; //표현식을 넣을 수도 있음

//숫자형: 소수 가능, +, 1, *, /(나누기), %(나머지)

const x = 1 / 0; //0으로 나눌 경우
console.log(x); //Infinity- 숫자형임.

const name = "Mike";
const y = name / 2;
console.log(y); //NaN(NOt a Number-숫자가 아니다)

//boolean(논리연산에 활용)

//undefined(값이 할당되지 않음)
let age;
console.log(age); //undefined -변수를 선언만 아무것도 할당하지 않았기 때문

let user = null; //user는 존재하지 않음

//typeof 연산자
console.log(typeof 3); //number
console.log(typeof name); //string
console.log(typeof "xxx"); //string
console.log(typeof true); //boolean
console.log(typeof null); //object(객체형) -null은 객체가 아니다! JS의 오류
console.log(typeof undefined); //undefined

//문자형과 문자형을 더할 수 있음(+)
//숫자형과 문자형도 더할 수 있음->문자형으로 변경됨
const a = "나는 ";
const b = " 입니다";
const age1 = 30; //number
console.log(a + age1 + "살" + b);

// #3-alert, prompt, confirm
// 사용자와 상호작용할 수 있는 대화상자 3가지
// alret(알려줌) : 실행 시 메시지를 띄우고 사용자가 확인버튼을 누를 때까지.

// prompt(입력 받음) : 사용자로부터 어떤 값을 입력 받음
// const name = prompt('이름을 입력하세요.');
// alert('환영합니다. ' + name + '님');

// const name = prompt('예약일을 입력해주세요.','2020-10-');
// prompt는 두 개의 인수를 받을 수 있음. (메시지, 입력받을 디폴트값-무언갈 안내 및 힌트 제공 시 유리)
// 취소를 누르면 null을 반환함

// confrim(확인 받음) -무언갈 확인 받을 때 사용
// const isAdult = confirm("당신은 성인 입니까?");
// console.log(isAdult);
// alert은 확인 버튼만 있지만, confirm은 확인과 취소 버튼이 있다.
// 확인을 누르면 true, 취소면 false 반환

단점 1.스크립트 일시 정지(창을 닫기 전까지 이후 동작 제한) 2.스타일링X(위치와 모양 정할 수 없음)
