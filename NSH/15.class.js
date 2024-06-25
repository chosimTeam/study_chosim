//class
const User = function (name, age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    };
};

User.prototype.showName = function(){
    console.log(this.name);
};

const mike = new User("Mike", 30);

class User2{
    constructor(name, age){ //객체 생성자 함수
        this.name = name;
        this.age =age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter something: ', (input) => {
//     console.log(`You entered: ${input}`);
//     rl.close();
// });
for(const p in mike){
    console.log(p);
}


//super  : 자식클래스에서 부모클래스의 생성자를 호출하기 위해 사용


class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive..");
    }
    stop(){
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(){
        super();
        this.navigation =1;
    }
    park(){
        console.log("PARK");
    }
}

const z4 = new Bmw("blue");