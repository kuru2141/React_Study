console.log(1);

setTimeout(() => {
  // 비동기 함수는 Web APIs에서 처리
  // 비동기 작업이 완료되면 콜백 함수를 JavaScript 엔진으로 전달
  console.log(2);
}, 3000);

console.log(3);
