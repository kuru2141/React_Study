// 1. 콜백 함수
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

main(() => {
    console.log("I am Sub");
    
});


// 2. 콜백 함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});
