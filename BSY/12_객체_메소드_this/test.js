// const google = "down";
this.google = 'Down';
let shorts = {
    google : "youtube",
    bytedance : "tictoc",
    meta : "instagram",
    execution: function() {
        console.log(this.google);
        // console.log(shorts.google);
    },
    endExe: () => this.google
};

console.log(shorts.execution());

// this
let man = shorts; // 여기서 this는 위에 값
shorts = null; // null의 특수성인듯 
console.log(man.execution()); // 따라서 this로 설정해야 안전

// 화살표 함수 this
console.log(man.endExe()); // 왜 down이 안뜰까?... 