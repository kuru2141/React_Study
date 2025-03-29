// 1. 함수 표현식

function funcA() {
    console.log("funcA");
};
let varA = funcA;
console.log(varA);

let varB = function () { // 익명 함수 -> 호이스팅의 대상이 되지 않음
    console.log("funcB");
};
varB();


// 2. 화살표 함수
let varC = (value) => {
    console.log(value)
    return value + 1;
};
console.log(varC(10));