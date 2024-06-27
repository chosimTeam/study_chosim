// 함수 선언 (호이스팅 쌉가능!)
function fn (a, b) {
    return a + b;
}

// 함수 표현 (호이스팅 못함ㅠㅠ)
const fn = function (a, b) {
    return a + b;
}

// 화살표 함수
const fn = (a, b) => {
    return a + b
}

const fn = (a, b) => a + b;

const fn = () => 20;

const fn = a => a + 10;
