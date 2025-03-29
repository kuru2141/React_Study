// 스코프
// -> 전역(전체 영역) 스코프 / 지역 스코프
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);
    function funcB() {} // 함수도 지역 스코프 영향 받음
}
funcA();
// console.log(b);

if (true) {
    let c = 1; // 지역 스코프
}
// console.log(c);

for (let i = 0; i < 10; i ++) {
    let d = 1; // 지역 스코프
}
// console.log(d);

// funcB();