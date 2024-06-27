// arr.sort(): 배열 재정렬. 배열 자체가 변경되니 주의!!!!!!
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr); //[ 1, 2, 3, 4, 5 ]

arr = ["e", "c", "d", "a"];
arr.sort();
console.log(arr); //[ 'a', 'c', 'd', 'e' ]

arr = [27, 8, 5, 13];
arr.sort();
console.log(arr); //[ 13, 27, 5, 8 ]
//정렬할 때 요소를 문자열로 취급함!!!!!
//인수로 정렬 로직을 담은 함수를 받음->해결
arr = [27, 8, 5, 13];
function fn(a, b) {
  return a - b;
}
arr.sort(fn);
console.log(arr); //[ 5, 8, 13, 27 ]

arr = [27, 8, 5, 13];
arr.sort((a, b) => a - b);
console.log(arr); //[ 5, 8, 13, 27 ]

//Lodash의  _.sortBy(arr)

/**************
 arr.reduce()
 인수를 함수로 받음
 (누적 계산값, 현재값)=>{return 계산값};
 */
arr = [1, 2, 3, 4, 5];
//배열의 모든수 합치기 - for, for of, forEach
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum); //15

sum = 0;
for (const i of arr) {
  sum += i;
}
console.log(sum); //15

sum = 0;
arr.forEach((v) => {
  sum += v;
});
console.log(sum); //15

//arr.reduce(acc,cur,idx)
res = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0); //초기값 없으면 첫 번째 요소값
console.log(res); //15

userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 3 },
  { name: "Steve", age: 60 },
];

result = userList.reduce((acc, cur) => {
  if (cur.age > 19) {
    acc.push(cur.name);
  }
  return acc;
}, []);
console.log(result); //[ 'Mike', 'Jane', 'Sue', 'Steve' ]

//arr.reduceRight(): 배열 우측부터 순회하는 reduce
