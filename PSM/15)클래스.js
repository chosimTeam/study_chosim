class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    //showName()처럼 클래스 내의 메서드는 User의 프로포타입에 저장됨
    console.log(this.name);
  }
}
const tom = new User("Tom", 19); //new 없이 호출하면 에러 발생
console.log(tom.showName()); //Tom

for (const p in tom) {
  console.log(p); //prototype은 안 보여줌->클래스의 메서드 안 보여줌
}
//name
//age

//상속: extends
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  park() {
    console.log("PARK");
  }
}

//메서드 오버라이딩(method overriding)
//상속받을Car와 동일한 이름으로 메서드를 정의하면 덮어 쓰게 된다.
class Bmw2 extends Car {
  park() {
    console.log("PARK");
  }
  stop() {
    console.log("OFF");
  }
}
const z2 = new Bmw2("blue");
console.log(z2.stop()); //OFF

//부모의 매서드를 그대로 사용하면서 확장하고 싶으면?->super키워드!
class Bmw3 extends Car {
  park() {
    console.log("PARK");
  }
  stop() {
    super.stop(); //부모 Car의 stop을 사용하겠다는 의미
    console.log("OFF");
  }
}
const z3 = new Bmw3("blue");
console.log(z3.stop());
//STOP! -super로 인한 부모의 stop()
//OFF - 내가 정의한 stop()

//<생성자 오버라이딩>
//클래스의 constructor는 빈 객체를 만들어주고, this로 그 객체를 가리키게 됨.
//반면 extends를 써서 만드는 자식 class는 빈 객체가 만들어지고 this에 할당하는 그 작업을 건너뜀.
//그래서 항상 super키워드로 부모 클래스의 constructor를 실행해줘야 함.
class Bmw4 extends Car {
  constructor(color) {
    super(color);
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
}

class Bmw5 extends Car {
  // constructor(...args) {
  //   super(...args);
  // }
  park() {
    console.log("PARK");
  }
}
