const LaChoon = {
    host_1 : {
        name : "Ryan",
        type : "lion",
        favor : ["TV", "Cheese boll", "Sofa"],
        birth : 1.22
    },
    host_2 : {
        name : "Choosik",
        type : "Cat",
        favor : "Sweet potato",
        birth : 7.21
    }
}

// 접근 추가 삭제

console.log(LaChoon.host_1);
console.log(LaChoon.host_2);
console.log(LaChoon.host_2.age);

LaChoon['host_3'] = {name : "Brown", type : "bear"}
console.log(LaChoon);

delete LaChoon.host_3;
console.log(LaChoon)


// 간편 객체 생성
const user_name = "Seung_yeop";
const user_age = "33";

const USER_info = {
    user_name,
    user_age,
    gender : "M"
}
console.log(USER_info);

// 함수로 객체 생성
let Cafe = (menu, price) => {
    return {menu : menu , price : price}
};
const starbugs = Cafe("Espresso", 500);
console.log(starbugs);


// 프로퍼티 존재 여부
console.log(USER_info.birth);
console.log('birth' in USER_info);
console.log('user_name' in USER_info);

// 객체 반복문
for (let key in USER_info) {
    console.log(key);
    console.log(USER_info[key]);
} // 단 객체는 iterable 타입이 아니라서 of 사용 불가