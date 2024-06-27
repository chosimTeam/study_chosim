// || OR
let name = "Baek";
let age = 30;

if (name === "Tom" || age > 19) {
    console.log('통과');
} else {
    console.log("돌아가");
}


// NOT !
age = 10
let isAge = age > 19;

if (!isAge) {
    console.log("돌아가");
}

//  AND > OR

let gender = "F";
name = "Jane";
age = 30;
isAge = age > 19;

// if (gender === 'F' && name === 'Mike' || isAge){
if (gender === 'M' && (name === 'Mike' || isAge)){
    console.log('통과');
} else {
    console.log('돌아가');
}