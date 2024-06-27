//prototype: __proto__라는 객체

const user1 = {
  name: "Mike",
};
console.log(user1.hasOwnProperty("name")); //true

//객체에서 property를 읽으려고 하는데 없으면 __proto__ 에서 찾는다 (hasOwnProperty 등이 있음)
//만약에 객체에 있으면 거기서 탐색 멈춤!

const user2 = {
  name: "Mike",
  hasOwnProperty: function () {
    console.log("haha");
  },
};
console.log(user2.hasOwnProperty()); //haha

const car = {
  wheels: 4,
  drive() {
    console.log("drive...");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};
const benz = {
  color: "black",
};
const audi = {
  color: "blue",
};

bmw.__proto__ = car; //car가 bmw의 prototype이 된다 = bmw는 car의 상속을 받는다
console.log(bmw); //{ color: 'red', navigation: 1 }
console.log(bmw.color); //red
console.log(bmw.wheels); //4

//상속은 계속 이어질 수 있다. (prototype chain) (car>bmw>x5)
const x5 = {
  color: "white",
  name: "x5",
};
x5.__proto__ = bmw;
console.log(x5.name); //x5
console.log(x5.color); //white
console.log(x5.navigation); //1
console.log(x5.drive()); //drive...

//상속된 프로퍼티들은 안 나오네
console.log(x5); //{ color: 'white', name: 'x5' }
console.log(Object.keys(x5)); //[ 'color', 'name' ]
console.log(Object.values(x5)); //[ 'white', 'x5' ]

for (p in x5) {
  console.log(p);
} //상속된 프로퍼티들까지 다 나옴

for (p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log("o", p);
  } else {
    console.log("x", p);
  }
} //hasOwnProperty는 객체가 직접 가지고 있는 프로퍼티만 true를 반환
//o color
//o name
//x navigation
//x wheels
//x drive

const Bmw = function (color) {
  this.color = color;
};
Bmw.prototype.wheels = 4; //생성자함수가 생성하는 객체에 __proto__를 설정하는 의미
Bmw.prototype.drive = function () {
  console.log("drive..");
};

const x3 = new Bmw("red");
console.log(x3.wheels); //4
console.log(x3.drive()); //drive..

//생성자가 함수가 새로운 객체를 만들어 낼 때 그 객체는 생성자의 instance라 한다.
//instanceof : true/false 반환
console.log(x3 instanceof Bmw); //true
console.log(x3.constructor === Bmw); //true
//생성자로 만들어진 인스턴스 객체에는 constructor라는 프로퍼티가 존재.
//이 constructor는 생성자, 즉 Bmw를 가리킨다.

//이렇게 한 번에 하면 된다. -이렇게 하면 constructor가 사라진다.->좋은 방법이 아님
Bmw.prototype = {
  //constructor: Bmw, -수동으로 명시하여 해결
  wheels: 4,
  drive() {
    console.log("drve..");
  },
};
const z4 = new Bmw("blue");
console.log(z4.constructor === Bmw); //false

//클로저 활용 -프로퍼티 값 변경을 금지하기 위해
const Bmww = function (color) {
  this.color = color;
};
const xx = new Bmw("red");
xx.color = "black";
console.log(xx.color); //black -마음대로 변경 가능한 문제 발셍

const Bmww2 = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
}; //초기에 설정한 값만 얻을 수 있고, 바꿀 수 있는 방법이 아예 없음
const xx2 = new Bmww2("red");
console.log(xx2.getColor()); //red
