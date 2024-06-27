for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i)
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while(i < 10);


// continue break
i = 0;
while(true){
    if (i > 10) {
        console.log(`다운로드 완료`);
        break;
    }
    console.log(`다운로드 중 ... ${i}/10Mb`);
    i++;
}

i = 0;
while (i < 10) {
    if (i % 2) {
        console.log("이상없음");
        i++;
        continue;
    } else {
        console.log("짝수 버그 발견");
        i++;
    }
}