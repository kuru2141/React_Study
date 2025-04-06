// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// CJS 방식
// module.exports = {
//   add,
//   sub,
// };

// ESM 방식 (package.json에 "type": "module" 추가해야 됨)
// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
