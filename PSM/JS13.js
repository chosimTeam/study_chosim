//#13 객체 -method, this
const superman = {
  name: "clark",
  age: 33,
  // fly: function(){
  //     console.log('날아갑니다.')
  // }
  fly() {
    console.log("날아갑니다.");
  },
};

//객체와 메서드의 관계
const user = {
  name: "Mike",
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`); //user.name은 문제 발생 가능성
  },
};
user.sayHello(); //this가 점 앞에 있는 user가 된다. Helllo, I'm Mike 출력

/**
 * 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음.
 * 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴.
 */
let boy = {
  name: "Mike",
  sayHello: () => {
    console.log(this); //전역객체 (브라우저 환경: window, Node.js: global)
  },
};
boy.sayHello(); // this != boy

//예제로 확인
let boy = {
  name: "Mike",
  showName: function () {
    console.log(boy.name);
  },
};
boy.shoeName(); //"Mike"

let man = boy; //객체를 새로 만든 것은 아니고, 객체가 하나 있는데, boy로도 man으로도 접근 가능한 것.
//(사람은 Mike 한 명인데, 별명이 두 개(man, boy)인 것.)
man.name = "Tom";
// console.log(boy.name); //"Tom"
boy = null; //이제 Mike는 man으로만 접근 가능

man.showName(); //Error-boy는 지금 null을 가지고 있고, name도 showName도 사라짐
//this.name으로 변경 시 "Mike"라고 잘 나옴
