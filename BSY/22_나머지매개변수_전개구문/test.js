/**
 * arguments
 * 함수로 넘어 온 모든 인수에 접근
 * 함수내에서 이용 가능한 지역 변수
 * length / index
 * array 형태의 객체
 * 배열의 내장 메서드 없음 (forEach, map)
 */
function showArg(name) {
    console.log(arguments.length);  // 2
    console.log(arguments[0]);      // Mike
    console.log(arguments[1]);      // Tom
}

showArg('Mike', 'Tom');

// 나머지 매개변수
function showName(...name) {
    console.log(name);
}

showName();                 // []
showName('Mike');           // [ 'Mike' ]
showName('Mike', 'Tom');    // [ 'Mike', 'Tom' ]

// 활용 reduce
function add (...num) {
    let result = 0;
    for (let i of num) {
        result += i;
    }
    return result;
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 활용 생성자 함수
function User (name, age, ...skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}

const user1 = new User('a', 20, 'python', 'sql');
const user2 = new User('a', 20, 'HTML', 'CSS', 'JavaScript');
const user3 = new User('a', 20, 'C');

console.log(user1, user2, user3);



// 전개 구문 : 배열
let arr1 =  [1, 2, 3];
let arr2 =  [4, 5, 6];

let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 전개 구문 : 복제 (원본이 아닌 복제)
let arr = [1, 2, 3];
let arr_copy = [...arr];
console.log(arr_copy); // [1, 2, 3]

let user = { name : 'a', age : 20 };
let user_copy = {...user};
console.log(user_copy); // { name: 'a', age: 20 }

