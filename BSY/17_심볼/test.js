// Symbol : 유일한 식별자 (유일성 보장)

const a = Symbol();
const b = Symbol();

console.log(a == b);
console.log(a === b);
// 서로 같아보여도 각자 유일한 식별자로서 다르다고 인식

// 사용 사례

const id = Symbol('id');

const user = {
    name : 'Mike',
    age : 30, 
    [id] : 1001,
}

console.log(user);
console.log(user.id); // undefined
console.log(user[id]); // 1001
console.log(Object.keys(user)); // Symbol 값은 출력되지 않음 (변하지 않고 따로 출력되지는 않지만 존재하는 값)

const showId = Symbol('print id');
user[showId] = function () { console.log(this.age) };

console.log(user[showId]());
// 전역심볼 : Symbol.for()
// 심볼과의 차이점
const id_1 = Symbol.for('id');
const id_2 = Symbol.for('id');

console.log(id_1 === id_2) // 서로 같다고 나옴
