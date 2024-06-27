// 빽틱 : 여러줄 표현
let doc = `안녕하세요
적당히 바람이 시원해
기분이 너무 좋아요`;
console.log(doc);

// 문자열 길이 구하기
doc = "안녕하세요.";
console.log(doc.length); // 띄어쓰기, \n 포함

// 인덱스 (문자열은 인덱스를 활용하여 수정하는 것은 불가능)
console.log(doc[0]);
console.log(doc[5]);
console.log(doc[6]);

// 문자열에서 특정 문자 인덱스로 찾기
doc = "Nice to meet you.";
console.log(doc.indexOf("you"));
console.log(doc.indexOf("I")); // 없다면 -1


// 대소문자로 변환
doc = "Hello, JS";
console.log(doc.toUpperCase());
console.log(doc.toLowerCase());

// 문자열 인덱싱 (슬라이싱)
doc = "012345";
console.log(doc.slice(1,2)); // 인덱스 1부터 2까지
console.log(doc.slice(2));   // 인덱스 2부터 끝까지
console.log(doc.slice(2, -2));   // 인덱스 끝에서 부터 2까지

// 문자열 인덱싱 (서브스트링)
doc = "012345";
console.log(doc.substring(1, 3)); // 인덱스 1과 3사이
console.log(doc.substring(3, 1)); // 인덱스 1과 3사이

// 문자열 인덱싱 (서브스트)
doc = "012345";
console.log(doc.substr(1, 3)); // 인덱스 1부터 3개 순서대로 가져오기
console.log(doc.substr(-2, 3)); // 인덱스 -2부터 3개 순서대로 가져오기 (갯수가 없다면 있는만큼)

// 문자열 공백제거
doc = "     a    ";
console.log(doc.trim());

// 문자열 반복
doc = 'happy!'
console.log(doc.repeat(3));

// 문자열 비교 : 아스키 코드 값에 맞춰 대소 비교 가능 (한글은 ㄱ ㅎ 순)
console.log("a" < "b");
console.log("A" < "b");

// 아스키 코드 변환
console.log("a".codePointAt(0)); // 97
console.log(String.fromCodePoint(97)); // a

// ex
let list = [
    "01. abc",
    "02. def",
    "03. ghi",
    "04. jkl",
    "05. nmo",
    "06. pqr",
];

// let newList = [];
let newList = "";

for (let i of list) {
    // newList.push(i.slice(4));
    newList += (i.slice(4)).toUpperCase();
}
console.log(newList);

// ex
let NoF = (str) => {
    if (str.includes("F")) {
        console.log("F가 있다...");
    } else {
        console.log("F가 없다.");
    }
}

NoF(newList);