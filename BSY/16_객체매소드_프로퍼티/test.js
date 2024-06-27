let a = 'age';

const user = {
    name : 'Mike',
    [a] : 30, // age : 30 => computed property(계산된 프로퍼티)
}


const info = {
    sub : 'Marketing',
    stu : 38,
}
// Object.assign()
const subject = info; // 이건 복사가 아니라 주소값 공유 그래서 요소를 변경하면 원본도 변경
// const newInfo = Object.assign({ diff : "High" }, info); // 이렇게 하면 diff:High 값을 함께 포함하여 복사
// const newInfo = Object.assign({sub : "IT" }, info); // 이렇게 하면 sub는 덮어쓰기가 되어 Marketing 값을 출력
// const newInfo = Object.assign(user, info); // 이렇게 하면 두 객체가 합하여 복사
const newInfo = Object.assign({}, info);
console.log(newInfo === info);


// Object.keys() 
console.log(Object.keys(info)); // 객체의 키값만 배열로 반환한다.

// Object.values()
console.log(Object.values(info)); // 객체의 값만 배열로 반환한다.

// Object.entries()
console.log(Object.entries(info));

// Object.fromEntries()
const arr = [
    ["HTML", "layout"],
    ["CSS", "Design"],
    ["JS", "engine"]
];

console.log(Object.fromEntries(arr)); // n행 2열의 배열로 만들어주면 객체로 전환해준다.