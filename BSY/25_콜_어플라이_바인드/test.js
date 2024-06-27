// call, apply, bind : 함수 호출 방식과 관계없이 this 지정 가능

// call : 모든 함수에서 사용 가능하며 this를 특정값으로 지정 가능하다.

const mike = {
    name : 'Mike'
};

const tom = {
    name : 'Tom'
}


// globalThis.name = '콘솔에서는 윈도우, 웹서버에서는 브라우저';
function showThisName () {
    console.log(this.name);
}

this.name = '콘솔에서는 윈도우, 웹서버에서는 브라우저';
showThisName(); //window.name
showThisName.call(mike);

// 생성자 함수 만들기
function update (birth, occu) {
    this.birth = birth;
    this.occu = occu;
} 

update.call(mike, 1991, "marketer");
// const a = update.call(mike, 1991, "marketer"); // 이렇게 하면 undefined
console.log(mike);

// apply : 매개변수를 처리하는 방법을 제외하면  call과 같다, call은 매개변수를 직접 받지만 apply는 배열로 받는다.

update.apply(tom, [1991, "AE"]);
console.log(tom);

const nums = [3, 10, 1, 6, 4];
console.log(Math.min.apply(null, nums)); //null은 this의 역할인데 여기서는 필요없어서 null로 넣음
console.log(Math.max.call(null, ...nums)); //call은 직접 인자를 받아야되서 ... 나머지로 배열을 풀어줌


// bind : 함수의 this 값을 영구히 바꿀 수 있음

const baek = {
    name : "Baek",
}

function info (birth, occu) {
    this.birth = birth;
    this.occu = occu;
}

const infoBaek = info.bind(baek);
infoBaek(1991, 'Edu');
console.log(baek);


// 활용 예제
const user = {
    id : 1,
    name : 'aroma',
    showName : function () {
        console.log(this.name);
    }
}

user.showName(); // aroma

let fn = user.showName;
console.log(fn()); // undefined

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();
