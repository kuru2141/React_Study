let p1 = 1;
let p2 = p1;

p1 = 2;
console.log(p2); // 원시 타입: 불변값

// 객체 타입 주의사항 1. 의도치 않게 값이 수정될 수 있다.
let o1 = { name: "하이요" };
let o2 = o1; // 얕은 복사
o1.name = "홍길동";
console.log(o2.name); // 객체 타입: 가변값

// 원본 객체가 수정되지 않게 하려면?
let new_o1 = { name: "하이요" };
let new_o2 = { ...new_o1 }; // 깊은 복사
new_o1.name = "홍길동";
console.log(new_o2.name);

// 객체 타입 주의사항 2. 객체 간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
let n_o1 = { name: "하이요" };
let n_o2 = n_o1;
let n_o3 = { ...n_o1 };
console.log(n_o1 === n_o2); // true
console.log(n_o1 === n_o3); // false

// 프로퍼티를 기준으로 비교하려면? (JSON.stringify: 객체를 문자열로 변환)
console.log(JSON.stringify(n_o1) === JSON.stringify(n_o3)); // true

// 객체 타입 주의사항 3. 배열과 함수도 사실 객체이다.
