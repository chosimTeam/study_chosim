// splice (지움)
let arr = [0, 1, 2, 3, 4, 5];

arr.splice(1, 2); // 인덱스 1번부터 2개를 지움
console.log(arr);

// splice (지움, 추가)
arr = [0, 1, 2, 3, 4, 5];
arr.splice(1, 2, 100, 200); // 인덱스 1부터 2개를 지움 + 100과 200을 그 사이에 추가
console.log(arr);

// splice (추가)
arr = [0, 1, 2, 3, 4, 5];
arr.splice(1, 0, 100, 200); // 인덱스 1부터 0개를 지움 + 인덱스 0과 1사이에 100과 200을 추가
console.log(arr);

// splice 삭제된 반환값
arr = [0, 1, 2, 3, 4, 5];
let remove = arr.splice(1, 2); // 인덱스 1번부터 2개를 지움
console.log(remove);

// slice (인덱싱)
arr = [0, 1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // 인덱스 1부터 3까지 출력
console.log(arr.slice()); // 배열 복사됨

// concat (병합)
arr = [1, 2, 3];
arr.concat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]
arr.concat([4, 5, 6], [7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.concat([4, 5, 6], 7, 8, 9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// forEach (배열 반복)
arr = ['a', 'b', 'c'];

arr.forEach((val, idx, arr) => {
    console.log(`${idx}. ${val} ${arr}`);
}) // forEach((요소, 인덱스, 배열) => {});


// 배열 인덱스 찾기
arr = [1, 2, 3, 4, 5, 2];
console.log(arr.indexOf(4)); // 3 4 찾기
console.log(arr.indexOf(2,  4)); // 5 2를 인덱스 4에서부터 찾기
console.log(arr.indexOf(10)); // 10은 없어서 -1 반환
console.log(arr.lastIndexOf(5)); // 4 끝부분 부터 찾기

var result = arr.find((item) => {
    return item % 2 === 0;
});
console.log(result); // 2

let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
];

var result = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
})

console.log(result); // { name: 'Tom', age: 10 }

var result = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
})

console.log(result); // 2


// filter
arr = [1, 2, 3, 4, 5, 6];

var result = arr.filter((item) => {
    return item % 2 === 0;
});
console.log(result); // [2, 4, 6]

// 역정렬
arr = [1, 2, 3, 4, 5, 6];
console.log(arr.reverse()); //[ 6, 5, 4, 3, 2, 1 ]

// 포함 유무 확인
arr = [0, 1, 2, 3, 4, 5];
console.log(arr.includes(4)); // true
console.log(arr.includes(7)); // false


// map : 함수를 받아서 | 특정 기능을 시행하고 | 새로운 배열을 반환 하는 것
userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
];

let m = userList.map((user, index) => {
    return Object.assign({ id : index }, user, { isAdult: user.age > 19 })
})
console.log(m);

// join, split
arr = ['a', 'b', 'c'];
console.log(arr.join()); // a,b,c
console.log(arr.join(" ")); // a b c
console.log(arr.join("")); // abc

arr = 'a b c'
console.log(arr.split(' ')); // [ 'a', 'b', 'c' ]
console.log(arr.split(''));  // [ 'a', ' ', 'b', ' ', 'c' ]
console.log(arr.split(',')); // [ 'a b c' ]


// Array.isArray()
let user = {
    name : 'Mike',
    age : 30,
};

let user_list = ['Mike', 'Tom', 'Jane'];

console.log(typeof user);               // object
console.log(typeof user_list);          // object
console.log(Array.isArray(user));       // false
console.log(Array.isArray(user_list));  // true
