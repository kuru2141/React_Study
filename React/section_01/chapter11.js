// 함수 선언

function greeting() {
    console.log("안녕하세요!");
}
console.log("호출 전");
greeting();
console.log("호출 후");


let area1 = getArea(10, 30);
console.log(area1);

getArea(30, 20);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
    function another() { // 중첩 함수
        console.log("another");
    }
    another();

    // let width = 10;
    // let height = 20;
    let area = width * height;

    return area;
    console.log(area);
}