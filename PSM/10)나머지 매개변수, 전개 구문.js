//Rest parameters, Spread syntax(...)

//인수 전달
function showName(name) {
  console.log(name);
}
showName("Mike"); //Mike
showName("Mike", "Tom"); //Mike -호출 인수 개수 제한 없음!
showName(); //undefinde -아무것도 전달하지 않아도 됨

//함수의 인수를 얻는 방법:1)arugments로 접근 2)나머지 매개변수 사용
//화살표함수에는 arguments가 없음.

/**
 * <arguments>
 * 함수로 넘어 온 모든 인수에 접근
 * 함수 내에서 이용 가능한 지역 변수
 * length/index
 * Array 형태의 객체
 * 배열의 내장 메서드 없음(forEach, map)
 ***/
function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName("Mike", "Tom");
//2
//Mike
//Tom

//<나머지 매개변수>
function showName(...names) {
  console.log(names);
}
showName(); //[] -undefined아니라 빈 배열!!
showName("Mike"); //[ 'Mike' ]
showName("Mike", "Tom"); //[ 'Mike', 'Tom' ]

//전달 받은 모든 수를 더하는 함수를 만들자
function add(...nums) {
  let sum = 0;
  nums.forEach((num) => (sum += num));
  console.log(sum);
}
add(1, 2, 3); //6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

//user객체를 만들어 주는 생성자 함수를 만들자
function User(name, age, ...skills) {
  //나머지 매개변수는 마지막에!
  this.name = name;
  this.age = age;
  this.skills = skills;
}
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "Js", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1); //User { name: 'Mike', age: 30, skills: [ 'html', 'css' ] }
console.log(user2); //User { name: 'Tom', age: 20, skills: [ 'Js', 'React' ] }
console.log(user3); //User { name: 'Jane', age: 10, skills: [ 'English' ] }

//전개 구문: 배열 (arr.puse, splice, concat과 달리 간편!)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//객체
let user = { name: "Mike", age: 30 };
let userrr = { ...user }; ///user와는 별개의 userrr로 복제된 것. user에 영향X
userrr.name = "Tom";
console.log(user.name); //Mike
console.log(userrr.name); //Tom

//arr1을 [4,5,6,1,2,3]으로
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr2.reverse().forEach((num) => {
  arr1.unshift(num);
});
console.log(arr1); //[ 4, 5, 6, 1, 2, 3 ]

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr1 = [...arr2, ...arr1];
console.log(arr1); //[ 4, 5, 6, 1, 2, 3 ]

let userr = { name: "Mike" };
let info = { age: 30 };
let fe = ["Js", "React"];
let lang = ["Korean", "English"];

userr = {
  ...userr,
  ...info,
  skills: [...fe, ...lang],
};
console.log(userr);
/*{
    name: 'Mike',
    age: 30,
    skills: [ 'Js', 'React', 'Korean', 'English' ]
  }*/
