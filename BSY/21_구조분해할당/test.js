// 디스트럭처링 : 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

let [x, y] = [1, 2];
console.log(x, y); // 1 2


let users = ['a', 'b', 'c'];
let [str1, str2, str3] = users;
console.log(str1, str2, str3); // a b c

let str = 'hello world javascript';
let [a, b, c] = str.split(' ');
console.log(a);
console.log(b);
console.log(c);

// 1대 1 대응이 안되면 undefined  생김
// let [num1, num2, num3] = [1, 2];
let [num1 = 2, num2, num3=3] = [1, 2];
console.log(num3); // 없으면 undefined | 있으면 기본값
console.log(num1); // 기본값이 있어도 대응되는 값이 있으면 대응값 먼저

// 일부 반환값 무시
let [num4,  ,num5] = [1, 2, 3, 4];
console.log(num4, num5); // 1 3

// 값 교차 변경
let str4 = 'a';
let str5 = 'b';

[str4, str5] = [str5, str4];
console.log(str4, str5); // b a


// 객체 구조 분해
let user = {
    name : 'Mike',
    age : 30
};

// let {name, age} = user;
let {age, name, gender='M'} = user; // 순서 상관없이 사용 가능
console.log(name);
console.log(age);
console.log(gender); // 기본 값이 없으면 undefined | 있으면 기본값 출력 | 기본값 < 할당되는 값

let { name : userName, age : userAge } = user; // 새로운 변수 키값으로 할당
console.log(userName);
console.log(userAge);

