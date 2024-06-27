// 비교 연산자
console.log(10 > 20);
console.log(10 >= 20);
console.log(10 < 20);
console.log(10 <= 20);
console.log(10 == 20); // 값만 같음
console.log(10 === 20); // 값과 타입이 같음
console.log(10 != 20);

// 조건문
const score = 70;

if (score >= 60) {
    console.log("합격");
} else if ( score === 50) {
    console.log("재시험");
} else { console.log("불합격") }

if(true) { 
    console.log("무조건 실행!"); 
}

if(false) {
    console.log("무조건 패스!");
}