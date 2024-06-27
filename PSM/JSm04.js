//#04 심볼

//Property key: 문자형
const obj = {
  1: "1입니다.",
  false: "거짓",
}; //숫자형이나 불린형으로 만들어도 결국엔 문자형
Object.keys(obj);
obj["1"]; // "1인니다"
obj["false"]; //"거짓"

//객체 프로퍼티로 하나더 가능 한 게 Symbol-유일한 식별자를 만들 때 사용
const a = Symbol(); //new를 붙이지 않는다.
const b = Symbol();

console.log(a);
Symbol();

console.log(b);
Symbol();

a === b; //false
a == b; //false

//유일성이 보장됨-전체 코드 중 딱 하나
const id = Symbol("id"); //심볼을 만들 때 설명을 붙여줄 수도 잇음->디버깅할 때 편함
//문자열을 전달해주면 되는데, 심볼 생성에 어떠한 영향도 미치지는 않음.

const id2 = Symbol("id");
id == id2; //false - 설명이 똑같아도 다른 것

const id3 = Symbol("id");
const user = {
  name: "Mike",
  age: 30,
  [id3]: "myid",
};
console.log(user); //{name: 'Mike', age: 30, Symbol(id3):'myid'}

Object.keys(user); //['name','age']
Object.values(user); //['Mike','age']
Object.entries(user);
[Array(2), Array(2)];
//이 메서드들은 키가 심볼형인 프로퍼티는 건너 뜀
for (let a in user) {
} //for in을 써도 건너 뜀!

//Symbole.for(): 전역 심볼
/**
 * -하나의 심볼만 보장받을 수 잇음
 * -없으면 만들고, 있으면 가져오기 때문
 * -Symbol함수는 매번 다른 Symbol값을 생성하지만,
 * -Symbol.for 메서드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
 */
const id_a = Symbol.for("id");
const id_b = Symbol.for("id");
id_a === id_b; //true
Symbol.keyFor(id_a); //'id'

//description -전역 심볼이 아닌 심볼은 keyFor 사용 불가, 대신 description으로 이름 확인 가능
const idd = Symbol("id입니다.");
idd.description;
("id입니다.");

//숨겨진 Symbol key 보는 법
const iidd = Symbol("id");
const userr = {
  name: "Mike",
  age: 30,
  [iidd]: "myid",
};
Object.getOwnPropertySymbols(userr); //[Symbol(iidd)]  -심볼키만 보여줌
Reflect.ownKeys(userr); //['name', 'age', Symbol(iidd)]  -심볼형 키를 포함한 모든 키를 보여줌
