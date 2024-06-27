//#12객체
const superman = {
  name: "clark",
  age: 33,
};
//접근
superman.name; //'clark'
superman["age"]; //33
//추가
superman.gender = "male";
superman["hairColor"] = "black";
//삭제
delete superman.hairColor;
delete superman["hairColor"];

//<단축 프로퍼티>
const superman2 = {
  name, //name: name
  age, //age: age
  gender: "male",
};

//<프로퍼티 존재 여부 확인>
superman.birthDay; //undefined
"bithDay" in superman; //false
"age" in superman; //true

//<for ..in 반복문>
for (let key in superman) {
  console.log(key);
  console.log(superman[key]);
}
