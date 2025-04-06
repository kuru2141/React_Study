// 터미널에서 node src/index.js 입력 시 실행 가능
console.log("안녕 Node.js");

// CJS 방식
// const moduleData = require("./math");
// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

//ESM 방식
import mul, { add, sub } from "./math.js";
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
