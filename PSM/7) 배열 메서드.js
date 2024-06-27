//arr.splice(n,m): 원본의 특정 요소 지움
//n번째 인덱스부터 포함해서 m개 지워줘
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); //[ 1, 4, 5 ]

//arr.splice(n,m,x): 원본의 특정 요소 지우고 추가
//n번째 인덱스부터 포함해서 m개 지우고 그 자리에 x들을 추가해줘
//삭제된 요소를 배열로 반환함.

arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 3, 100, 200);
console.log(arr); //[ 1, 100, 200, 5 ]
console.log(result); //[ 2, 3, 4 ]

//m=0일 경우 아무것도 지우지 않으니 그냥 특정 자리에 추가만 하는 꼴이 됨!
arr = ["나는", "철수", "입니다"];
arr.splice(1, 0, "대한민국", "소방관");
console.log(arr); //[ '나는', '대한민국', '소방관', '철수', '입니다' ]

//arr.slice(n,m): n번째 인덱스부터 m-1번째 인덱스까지 반환해줘.
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); //[ 2, 3, 4 ]
console.log(arr); //[ 1, 2, 3, 4, 5 ]-원본은 변화X
console.log(arr.slice()); //[ 1, 2, 3, 4, 5 ]- 괄호가 공란이면 원본 그대로 반환(복사)

//arr.concat(arr2,arr3..): 합쳐서 새 배열 반환 (원본 변화X)
arr = [1, 2];
console.log(arr.concat([3, 4])); //[ 1, 2, 3, 4 ]
console.log(arr.concat(3, 4)); //[ 1, 2, 3, 4 ]-배열로 안 줘도 괜찮네

console.log(arr.concat([3, 4], [5, 6])); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.concat([3, 4], 5, 6)); //[ 1, 2, 3, 4, 5, 6 ] -배열로 안 줘도 괜찮네

//arr.forEach(fn): 배열 반복
let users = ["Mike", "Tom", "Jane"];
users.forEach((item, index, arr) => {
  console.log(`${item},${index},${arr}`);
});

//Mike,0,Mike,Tom,Jane
//Tom,1,Mike,Tom,Jane
//Jane,2,Mike,Tom,Jane

//arr.indexOf(요소, 시작위치)->처음인덱스반환(없으면-1)
//arrl.lastIndexOf ->끝에서부터 탐색
arr = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr.indexOf(3)); //2
console.log(arr.indexOf(3, 3)); //7
console.log(arr.lastIndexOf(3)); //7

//arr.includes(): 포함하는지 확인 (인덱스는 관심X)
arr = [1, 2, 3];
console.log(arr.includes(2)); //true
console.log(arr.includes(8)); //false

//arr.find(fn)
//indexOf와 목적은 같지만, 보다 복잡한 연산이 가능하도록 함수를 넣을 수 있음
//조건을 만족, 즉 처음으로 true를 리턴하는 요소만 반환
//첫 번째 true값만 반환하고 끝!!! 만약 없으면 undefined를 반환

//arr.findIndex(fn): 해당 인덱스 반환, 없으면 -1

arr = [1, 2, 3, 4, 5];
result = arr.find((item) => {
  return item % 2 === 0;
});
console.log(result); //2

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
]; //이렇게 객체가 들어있는 경우 indexOf를 쓰기 어려우니 find 사용!
const res = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(res); //{ name: 'Tom', age: 10 }

const res2 = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(res2); //2

//arr.filter(fn): true를 리턴하는 모든 요소를 배열로 반환.
//find는 만족하는 처음 한 개만 반환한 거와 달리, 모든 요소들을 배열로 반환. (사용법은 동일)
arr = [1, 2, 3, 4, 5, 6];
result = arr.filter((item) => {
  return item % 2 === 0;
});
console.log(result); //[ 2, 4, 6 ]

//arr.reverse(): 원본을 역순으로 재정렬
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); //[ 5, 4, 3, 2, 1 ]

//arr.map(fn): 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환 (원본 변화X)
userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, { id: index + 1, isAdult: user.age > 19 });
});
console.log(newUserList);
/**
 * [
  { name: 'Mike', age: 30, id: 1, isAdult: true },
  { name: 'Jane', age: 27, id: 2, isAdult: true },
  { name: 'Tom', age: 10, id: 3, isAdult: false }
]

 */
console.log(userList); //원본은 변화X

//join(구분자) : 배열을 새로운 문자열로 반환 (원본 변화x)
arr = ["안녕", "나는", "철수야"];
console.log(arr.join()); //안녕,나는,철수야
//아무것도 안 전달됐을 경우 쉼표(,)가 사용됨

console.log(arr.join("")); //안녕나는철수야
console.log(arr.join(" ")); //안녕 나는 철수야
console.log(arr.join("-")); //안녕-나는-철수야
console.log(arr);

//split(구분자): 문자열을 새로운 배열로 반환 (원본 변화x)
users = "Mike,  Jane,Tom, T   ony";
console.log(users.split(",")); //[[ 'Mike', '  Jane', 'Tom', ' T   ony' ]

let str = "Hello, My name is Mike.";
console.log(str.split()); //[ 'Hello, My name is Mike.' ]
console.log(str.split("")); //-빈문자열기준으로나눠->각 글자마다 하나씩 자름
/**[
  'H', 'e', 'l', 'l', 'o',
  ',', ' ', 'M', 'y', ' ',
  'n', 'a', 'm', 'e', ' ',
  'i', 's', ' ', 'M', 'i',
  'k', 'e', '.'
]
 */

//Array.isArray(X): X가 배열인지 아닌지 확인
user = {
  name: "Mike",
  age: 30,
};
userList = ["Mike", "Tom", "Jane"];
//typeof로는 배열도 object로 나오기 때문
console.log(typeof user); //object
console.log(typeof userList); //object

console.log(Array.isArray(user)); //false
console.log(Array.isArray(userList)); //true
