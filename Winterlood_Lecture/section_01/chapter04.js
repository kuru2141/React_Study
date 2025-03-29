// 1. 변수
let age;
console.log(age);

age = 30;
console.log(age);


// 2. 상수
const birth = "1999.01.07";
// birth = "123"; 초기화 필수 및 변경 불가능


// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수없다.
let name1;
// let 2namel;

// 3-3. 예약어를 사용할 수 없다.
// let if;


// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;