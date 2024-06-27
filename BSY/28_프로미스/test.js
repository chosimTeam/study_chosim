/**
 * const pr = new Promise ((resolve, reject) => { })
 * 여기서 resolve는 성공했을 때 실행!  reject는 실패했을 때 실행! 
 * 이처럼 무언가를 완료했을때 실행되는 방식을 callback 함수
 */

// const pr = new Promise((resolve, reject) => {
//     let rn = Math.random()

//     if (rn >= 0.5) {
//         resolve("OK!!!!!!!!");
//     } else {
//         reject(new Error("error!!!!!!!!!"));
//     }
// });


// console.log("start");
// pr.then((result) => {
//     console.log(result);
// })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("end")
//     })

// 프로미스 함수 없이 콜백 함수 만들기 (콜백 지옥!)
// const f1 = (callback) => {
//     setTimeout(function () {
//         console.log("1번 주문 완료");
//         callback();
//     }, 1000);
// };

// const f2 = (callback) => {
//     setTimeout(function () {
//         console.log("2번 주문 완료");
//         callback();
//     }, 2000);
// };

// const f3 = (callback) => {
//     setTimeout(function () {
//         console.log("3번 주문 완료");
//         callback();
//     }, 3000);
// };

// console.log("시작");
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log("끝")
//         });
//     });
// });


// 프로미스 활용
const ff1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const ff2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("xxx");
        }, 3000);
    });
};

const ff3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// 프로미스 체이닝 (Promises chaining) : 누락도 볼 수 있음
console.log('시작');
console.time("x");
ff1()
    .then((res) => ff2(res))
    .then((res) => ff3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log("끝");
        console.timeEnd("x");
    });

// promise.all : 하나라도 누락되면 error
console.time("x2");
Promise.all([ff1(), ff2(), ff3()]).then((res) => {
    console.log(res)
    console.timeEnd("x2")
});

// promise.race : all 과 비슷한데 가장 빠른걸 먼저 보여줌
console.time("x3");
Promise.race([ff1(), ff2(), ff3()]).then((res) => {
    console.log(res)
    console.timeEnd("x3")
});