// 문자형
let user = "승엽";
user = '승엽';
user = `승엽`;

console.log('승엽');
console.log("승엽");
console.log(`${user}`);


// 숫자형
const NUM = 10;

console.log(10 + 10);
console.log(10 - 10);
console.log(10 / 10);
console.log(10 * 10);
console.log(10 % 10);
console.log(10 ** 10);

// 무한대
console.log(1/0);
console.log('name'/1);

// boolean
console.log(true == 1);
console.log(false == 0);
console.log(1 < 30);
console.log(1 > 30);

// NaN 과 undefined

let a;
console.log(a); // 정의되지 않은 값

a = null;
console.log(typeof a, a); // object라고 뜨는데 이건 잘못된것


// typeof
console.log(typeof 10, 10);
console.log(typeof "a", "a");
console.log(typeof true, true);
console.log(typeof null, null);
console.log(typeof undefined, undefined);

/**
 * null : 의도적으로 값이 없는 것
 * NaN : 숫자가 아닌것
 * none : 정의되지 않은 값
 * Na : 잘못된 값
 */


// 문자형과 문자변환
console.log("a" + "b");
console.log(30 + "a");
