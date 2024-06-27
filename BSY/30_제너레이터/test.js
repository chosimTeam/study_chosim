// generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
function* fn() {
    try {
        console.log(1);
        yield 1; // yield : 함수의 실행을 멈출 수 있음
        console.log(2);
        yield 2;
        console.log(3);
        yield 3;
        console.log(4);
        return "finish";
    } catch (e) {
        console.log(e);
    }
}

const a = fn();

console.log(a.next()); 
// 가장 가까운 yield 문을 만날때까지 실행
// value 는 yield의 1값이며 done은 함수가 끝나면 True, 아니면  false

console.log(a.next()); // 한번 더 실행 2 f

console.log(a.next()); // 3 f

// console.log(a.return("끝")); // 바로 리턴 되고 함수를 마침  끝  t 
// console.log(a.throw(new Error('err')));  // 바로 에러 리턴 되고 함수 마침 

console.log(a.next()); // finish t

console.log(a.next()); // undefined t


/**
 * Generator
 * iterable
 * Symbol.iterator 메소드가 있다.
 * Symbol.iterator 는 iterator를 반환해야 한다.
 * 
 * iterator
 * next 메소드를 가진다.
 * next 메서드는 value와 done 속성을 가진 객체를 반환한다.
 * 작업이 끝나면 done은 true 가 된다.
 */

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
// for (let i = 0; i < arr.length+1; i++) console.log(it.next());

// 제너레이터
function* fni() {
    yield 1;
    yield 2;
    yield 3;
}
const b = fni();
console.log(b[Symbol.iterator]() === b);
for (let i of b) console.log(i);

// 문자열
const str = "Hello";
const stri = str[Symbol.iterator]();
console.log(stri.next());
console.log(stri.next());
console.log(stri.next());
console.log(stri.next());
console.log(stri.next());
console.log(stri.next());

// Generator next()에 인수 전달
function* fn() {
    const num1 = yield "1번 숫자 입력";
    console.log(num1);
    
    const num2 = yield "2번 숫자 입력";
    console.log(num2);

    return num1 + num2;
}

const ssum = fn();

console.log(ssum.next());
console.log(ssum.next(1));
console.log(ssum.next(2));
console.log(ssum.next(3));


// Generator 값을 미리 만들어 두지 않음
function* fnwhile () {
    let index = 0;
    while (true)  {
        yield index++;
    }
}

const fw = fnwhile();

console.log(fw.next()); // 호출할때 마다 나옴
console.log(fw.next());
console.log(fw.next());
console.log(fw.next());

// Generator yield 이용
function* gen1 () {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2 () {
    yield "Hello,";
    yield* gen1();
    yield "!";
}

console.log(...gen2());

// Redux Saga 뭐임?
// js 라이브러리로 불러오는거 만들기