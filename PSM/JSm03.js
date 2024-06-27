//#3- 객체 메소드
//<computed property>
let a = 'age';
const user0={
    name:'Mike',
    [a]:30 //age: 30(변수 a에 할당된 갓이 들어감)
}
const user00 = {
    [1+4]:5,
    ["안녕"+"하세요"]: "Hello"
} // 식 자체를 넣는 것도 가능
console.log(user00 )//{5:5, 안녕하세요: "Hello"}

//<객체 메소드>
const user = {
  //user변수에는 객체 자체가 들어가 있는 게 아니라, 객체가 저장되어 있는 메모리 주소인, 객체에 대한 참조값이 들어감
  name: "Mike",
  age: 30,
};

//Object.assgin(): 객체 복제
const newUser = Object.assign({}, user); //{}빈객체는 초기값. 빈객체에 user가 병합
//같은 객체가 아니므로 하나가 변경되어도 변경 영향 없음
Object.assgine({ name: "Tom", user }); //키가 같으면 user꺼로 덮어쓰게 됨

const user2 = {
  name: "Mike",
};
const info1 = {
  afe: 30,
};

const info2 = {
  gender: "male",
};

Object.assign(user2, info1, info2); //info1 그후 info2

//Object.keys()): 키 배열 반환
const user3 = {
    name: 'Mike',
    age: 30,
    gender: 'male'.
}
Object.keys(user3); //['name','age','gender']

//Obhject.values(): 값 배열 반환
Object.values(user3); //['Mike',30,'male']

//Object.entries(): 키/ 값 배열 반환 -키와 값을 쌍으로 묶어서 배열로 반환
Object.entries(user3); //[ ['name','Mike],['age','30],['gender','male']]

//Object.fromEntries(): 키/값 배열을 객체로
    //키와 값을 쌍으로 묶은 배열을 넣어주면, 반대로 객체를 만들어준다.
const arr = [
    ['name','Mike'],['age',30].['gender','male']]; 
    Object.fromEntries(arr); // { name: 'Mike', age: 30, gender: 'male'.}
  