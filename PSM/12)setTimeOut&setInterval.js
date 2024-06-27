//setTimeout: 일정 시간이 지난 후 함수를 실행
//setInterval: 일정 시간 간격으로 함수를 반복

function fn() {
  console.log(3);
}
setTimeout(fn, 3000); //3초 후에 3 출력

setTimeout(function () {
  console.log(3);
}, 3000); //3초 후에 3 출력

function showName(name) {
  console.log(name);
}
setTimeout(showName, 3000, "Mike"); //(함수,시간,인수)
//3초 후에 Mike 출력

//clearTimeout: 예정된 작업을 없앰
//setTimeout은 time ID를 반환하는데, 이것을 활용하면 스케쥴링 취소 가능
const tId = function showName(name) {
  console.log(name);
};
setTimeout(showName, 3000, "Mike");
clearTimeout(tId); //3초가 지나기 전에 이 코드가 실행되어 아무것도 출력되지 않음

function showName(name) {
  console.log(name);
}
// const tIdd = setInterval(showName, 3000, "Mike"); //3초마다 Mike 출력
//반복되기 때문에 멈추려면 clearInterval(tIdd);

//주의 사항: delay time = 0이더라도 바로 실행되는 것은 아님
setTimeout(function () {
  console.log(2);
}, 0);
console.log(1);
//1 먼저 출력 그후 2 출력
//현재 실행중인 스크립트가 종료된 이후 스케졸링 함수를 실행하기 때문!

let num = 0;
function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다`);
  if (num > 5) {
    clearInterval(tIddd);
  }
}
const tIddd = setInterval(showTime, 1000);
