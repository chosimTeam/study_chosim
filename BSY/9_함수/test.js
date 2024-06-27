function func_name ( parameter_inputValue ) {
    return "return_value"
}

function func_name2 () {
    console.log("value_print");
}

// let a = func_name("a");
let b = func_name2();

// console.log(a, typeof a);
// console.log(b, typeof b);

//지역 변수와 전역 변수

// let x = 0;
// let y = 1;
// let z = 2;

// console.log('시점 1:', x, y, z); // 0 1 2

// {
//   let x = 'A';
//   let y = 'B';
//   console.log('시점 2:', x, y, z); // A B 2

//   {
//     let x = '가'
//     console.log('시점 3:', x, y, z); // 가 B 2
//   }

//   console.log('시점 4:', x, y, z);// A B 2
// }

// console.log('시점 5:', x, y, z); // 0 1 2