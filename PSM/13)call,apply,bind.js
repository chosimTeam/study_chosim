//call, apply, bind: 함수 호출 방식과 관계없이 this를 지정할 수 있음.

//call: 모든 함수에서 사용 가능, this를 특정값으로 지정 가능
const mike = {
  name: "Mike",
};
const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}
showThisName(); //undefined
showThisName.call(mike); //Mike
showThisName.call(tom); //Tom

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(mike, 1999, "singer"); //(this, 함수가 사용된 매개변수들)
console.log(mike); //{ name: 'Mike', birthYear: 1999, occupation: 'singer' }

//apply: 매개변수를 배열로 받음
update.apply(tom, [2002, "student"]);
console.log(tom); //{ name: 'Tom', birthYear: 2002, occupation: 'student' }

//apply는 배열 요소를 함수 매개변수로 사용할 때 유용
console.log(Math.max(3, 10, 2, 5)); //10

console.log(Math.max([3, 10, 2, 5])); //NaN

let nums = [3, 10, 2, 5];
console.log(Math.max(...nums)); //10
console.log(Math.max.apply(null, nums)); //10 -두 번째 매개변수로 배열로 전달하면 배열 속 요소들을 차례대로 인수로 사용하니까!!!
console.log(Math.max.call(null, ...nums)); //10

//bind: 함수의 this값을 영구히 바꿀 수 있음
update.bind(mike); //항상 this로 mike를 받도록 함.
update(1980, "police"); //this는이미 설정함
console.log(mike); //{ name: 'Mike', birthYear: 1980, occupation: 'police' }

const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName(); //hello, Mike
let fn = user.showName;
fn(); //hello, undefined -함수호출방식으로 불렀기 때문에 this가 global.
fn.call(user); //hello, Mike
fn.apply(user); //hello, Mike

let boundFn = fn.bind(user);
boundFn(); //hello, Mike
