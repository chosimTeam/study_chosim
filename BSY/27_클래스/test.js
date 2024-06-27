// 생성자 함수
const User = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);;
    };
};
const mike = new User("Mike", 30);

// 클래스 생성자
class User2 {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}
const tom = new User2("Tom", 19);

console.log(tom); // proto 안에 showName이 존재
console.log(tom.showName()); // proto 안에 showName이 존재

console.log(mike); // proto 밖에 showName이 존재
console.log(mike.showName()); // proto 밖에 showName이 존재
// 이를 해결하기 위해서는 생성장 함수 내에서 showName을 지우고 따로 User.prototype.showName = function () { console.log(this.name); };

/**
 * 생성자 함수는 new 없이 mike을 만들면 undefined가 뜬다.
 * 그러나 class는 new 없이 tom을 만들면 error가 뜬다.
 * 따라서 class는 반드시 new가 필요하다.
 */

for (let p in mike) console.log(p);     // name, age, showName 
for (let p in tom) console.log(p);      // name, age
// 따라서 클래스는 메소드의 집합 개념

// class 상속 : extends
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }

    drive() {
        console.log('drive...');
    }

    stop() {
        console.log('STOP!!!');
    }
}

class Bmw extends Car {

    park() {
        console.log("PARK~");
    }
    stop() {
        // super.stop(); // car(부모)의 메소드 상속
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");
console.log(z4);
z4.park();      // bmw에서
z4.drive();     // car에서


// class 메소드 오버라이딩
z4.stop(); // car에 있던 stop 위에 bmw가 덮어짐 // 만약 super.stop()을 실행하면 상위 부모 클래스의 메소드를 가져옴.


// class 오버라이딩 (생성자의 특수성)
class Benz extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
}
const x5 = new Benz('gray');
console.log(x5); // 클래스의 부모와 같이 생성자 메소드를 만들때는 반드시  super 그리고 매개변수(파라미터)가 부모 클래스와 같아야 한다.
