// async : 항상 프로미스를 반환
async function getName() {
    return "Mike"; // 프로미스 반환
    // return Promise.resolve("Tom"); // pending 대기 뜨고 값만 반환
    // throw new Error("err...");
}

console.log(getName()); // 프로미스 반환

// getName().then((name) => {
//     console.log(name);
// });

// getName().catch((err) => {
//     console.log(err);
// });


// await : 함수 내부에서만 사용 가능하고 외부에서 사용하면 에러
function getAge(age) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(age);
        }, 1000);
    });
}

async function showAge() {
    const result = await getAge(30);
    console.log(result);
}

console.log("시작");
showAge();


// 예시
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("xxx");
        }, 3000);
    });
};

const f3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

async function order(){
    try {
        // const result1 = await f1();
        // const result2 = await f2(result1);
        // const result3 = await f3(result2);
        // console.log(result3);

        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result)
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}
order();