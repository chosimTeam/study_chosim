let arr = ['A', 3, true, {id:1, user:"BB"}, function(){console.log("hi");}];

console.log(arr);

// 배열 길이
console.log(arr.length);

// 배열 요소 추가
arr.push(100);
console.log(arr);

// 배열 요소 삭제
arr.pop();
console.log(arr);

// 배열 요소 앞 제거 (요소 이동)
arr.unshift("Baek");
console.log(arr);

arr.shift();
console.log(arr);

// 배열 반복문
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let val of arr) {
    console.log(val);
}
for (let idx in arr) {
    console.log(arr[idx]);
}