/** #08 반복문
 * <for 반복문>
 * for (let i = 0; i <10; i++) { }
 *for (초기값; 조건; 코드 실행 후 작업){반복할 코드}
 * 초기값 지정, 조건이 true이면 코드 실행 , 후 작업, 조건 확인, 코드 실행, 증감 작업
 * 조건이 false가 되면 멈춤(반복문을 빠져나옴)
 * */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/**
 <while 반복문>
 let i = 0;
  while (i < 10) {코드}
 */
while (i < 10) {
  console.log(i);
  i++;
}
//  <do.. while>
let i = 0;
do {
  i++;
} while (i < 10);
/**
 while과 비슷한데 조건문을 아래로 내릴 수 있음->코드 실행 후 조건 체크
 ->적어도 한 번은 코드 실행!!!(while과의 큰 차이점))
 */

/** break, continue
 break: 멈추고 빠져나옴
 continue: 멈추고 다음 반복으로 진행
 */

while (true) {
  let answer = confirm("계속 할까요?");
  if (!answer) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
//1이면 truthy, 0이면 falsy
if (1) {
  console.log("1 is truthy");
} else {
  console.log("1 is falsy");
}

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

//https://developer.mozilla.org/ko/docs/Glossary/Truthy
