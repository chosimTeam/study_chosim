// 정렬
let arrNum = [5, 3, 4, 2, 1];
let arrStr = ['c', 'a', 'b', 'e', 'd'];

arrNum.sort();
arrStr.sort();

console.log(arrNum);
console.log(arrStr);

// 예외 (사전순으로 정렬)
let arrNum2 = [11, 4, 2, 55];

arrNum2.sort();
console.log(arrNum2);

let fn = (a, b) => {
    console.log(a, b)
    return a-b;    
};                  // 양수 : b a  | 음수 : a b | 0 : 그대로 : timsort = 병합 + 삽입
arrNum2.sort(fn);
console.log(arrNum2);

// reduce ( prev: 누적값 , curr: 현재값) : 누적값 즉 초기화값이 있다는 것이 특징

arrNum = [5, 3, 4, 2, 1];

let result = arrNum.reduce((prev, curr) => {
    return prev + curr;
}, 0)
console.log(result) // 15 배열합


let userList = [
    { name : "Mike", age: 30 },
    { name : "Tom", age: 10 },
    { name : "Jane", age: 27 },
    { name : "Sue", age: 26 },
    { name : "Harry", age: 42 },
    { name : "Steve", age: 60 },
];

result = userList.reduce((prev, curr) => {
    if(curr.age > 19) {
        prev.push(curr.name);
    }
    return prev;
}, [])


console.log(result); // 특정 조건 값만 가져오기

// reduceRight 는 오른쪽부터 연산된다는 특징만 있음
