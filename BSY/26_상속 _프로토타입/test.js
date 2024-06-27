const user = {
    name : 'Mike'
}
console.log(user.name); // Mike
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age')); // false
// 객체 내에는 __ proto__ 라는 함수가 존재! 여기서 hasOwnProperty 존재

// 상속
const car = {
    wheels: 4,
    drive() {
        console.log("drive...");
    }
}

const bmw = {
    color : "red",
    navigator : 1,
}

const benz = {
    color : "black",
}


bmw.__proto__ = car;

console.log(bmw);
console.log(bmw.wheels);  // car에서 상속 받아옴
console.log(bmw.drive()); // car에서 상속 받아옴

benz.__proto__ = bmw;

console.log(benz);
console.log(benz.wheels);     // bmw에서 상속 받아옴
console.log(benz.navigator);  // bmw에서 상속 받아옴

// benz가 wheels를 찾을 때 bmw -> car 이렇게 단계를 거쳐서 찾아오는 것을 Prototype Chain 이라고 함

for (let p in benz) {
    console.log(p); // color navigator wheels drive 다 나옴
}
console.log(benz); // color만 나옴
console.log(Object.keys(benz)); // color 만 나옴
console.log(Object.values(benz)); // black 만 나옴

for (let p in benz) {
    if (benz.hasOwnProperty(p)) {
        console.log(`${p} O`);
    } else {
        console.log(`${p} X`);
    }
}

// 생성자 함수
const Espresso = {
    bean : '7g',
    bar : 9,
}

const Extraction = function (time) {
    this.time = time;
}

const Ristretto = new Extraction(15);
const Lungo = new Extraction(30);

Ristretto.__proto__ = Espresso;

console.log(
    Ristretto,
    Ristretto.bean,
    Ristretto.bar,
);

Extraction.prototype.bean = 7; // Extraction의 인스턴스가 됨
Extraction.prototype.bar = 9;  // Extraction의 인스턴스가 됨

console.log(
    Lungo,
    Lungo.bean,
    Lungo.bar,
)

console.log(Lungo instanceof Extraction);
console.log(Lungo.constructor === Extraction);
console.log(Ristretto instanceof Extraction);

// 그러나 프로토타입을 객체의 입력하면 컨스트럭쳐가 사라짐
