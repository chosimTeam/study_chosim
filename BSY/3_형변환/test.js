// 숫자형 + 숫자형

console.log(typeof (30 + 30), 30 + 30);

// 숫자형태에 문자열

console.log(typeof ("30" + "30"), "30" + "30");

// 숫자와 문자
console.log(typeof (30 + "30"), 30 + "30");

// 문자열 형변환
console.log(
    String(3), typeof String(3),
    String(true), typeof String(true),
    String(null), typeof String(null),
);

// 숫자형 형변환
console.log(
    Number(3.4), typeof Number(3.4),
    Number('3.4'), typeof Number('3.4'),
    Number(true), typeof Number(true),
    Number('a'), typeof Number('a'),
    Number(null), typeof Number(null),
    Number(undefined), typeof Number(undefined)
);

// 불린 형변환
// false = 0, "", null, undefined, NaN
// 이 외에는 true

console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
);