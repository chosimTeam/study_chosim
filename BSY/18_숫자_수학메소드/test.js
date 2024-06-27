// toString() : 10 진수 => 2진수 또는 16진수
let num = 10;

console.log(num.toString());   // 문자열
console.log(num.toString(2));  // 2진수
console.log(num.toString(16)); // 16진수

let color = 255;
console.log(color.toString(16)); // 색상  ff

// Math
console.log(Math.PI); // 원주율
console.log(Math.ceil(10.1)); // 소숫점 올림
console.log(Math.floor(10.8)); // 소숫점 내림
console.log(Math.round(10.5)); // 소숫점 반올림
console.log(Math.random()) // 0~1 사이의 무작위 수
console.log( Math.floor(Math.random()*100)+1 ) // 0~100 사이의 무작위 수
console.log( Math.max(1, 2, 3, 4) ) // 최대값 
console.log( Math.min(1, 2, 3, 4) ) // 최소값 
console.log( Math.abs(-4) ) // 절대값
console.log( Math.pow(-3, 3) ) // 제곱 연산
console.log( Math.sqrt(144) ) // 제곱근 연산


// toFixed() : 특정 소숫점 자리수 반올림 (문자열로 반환됨)
console.log(10.12345.toFixed(4)); // 소숫점 4자리에서 반올림
console.log(10.12.toFixed(4)); // 소숫점 4자리에서 반올림 -> 0으로 채움
console.log(10.5.toFixed(0)); // 정수 부분까지 반올림

// isNaN()
let x = Number('x'); // NaN
console.log(isNaN(x)) // 유일하게 NaN값을 확인할 수 있음

// parseInt() parseFloat()
let margin = '10px';
console.log(
    parseInt(margin), // 10
    Number(margin) // NaN
);

console.log(
    parseInt('10', 2),
    parseInt('111', 8),
    parseInt('f10', 16),
); // 진수 변환도 가능

console.log(
    parseInt("7.7"),
    parseFloat("7.7")
);