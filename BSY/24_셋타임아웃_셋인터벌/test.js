// setTimeout : 일정 시간이 지난 후 함수를 실행

function fn_1 () {
    console.log('hello');
}
// setTimeout(fn_1, 3000); // 3초 후 실행

// function fn_2 (n) {
//     console.log(n);
// }
// setTimeout(fn_2, 3000, "world"); // (함수, 시간, 인수)

// const tid = function (n) {
//     console.log(n);
// }
// setTimeout(tid, 3000, 'Javascript');

// clearTimeout(tid); // 중간에 끈어버림

// setinterval : 일정 시간 간격으로 함수를 반복
// let cnt = 0;

// const ttt = function (n) {
//     console.log(`${n} ${cnt++}`);
//     if (cnt > 3) {
//         clearTimeout(x);
//     }
// }
// const x =  setInterval(ttt, 1000, '시작');

setTimeout(fn_1, 0); // 바로 실행되지 않음 : 현재 실행중인 실행부가 완료된 후 스케줄링에 올라오기 때문
console.log(1); // 이것이 먼저 실행됨 

