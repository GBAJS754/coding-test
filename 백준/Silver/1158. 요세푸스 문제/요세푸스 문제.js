let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

let arr = Array.from({ length: input[0] }, (_, index) => index + 1);
const k = input[1];
const answer = [];

while (arr.length > 0) {
  const n = (k % arr.length) - 1;
  answer.push(arr.splice(n, 1).join(""));
  const temp = arr.splice(0, n);
  arr = arr.concat(temp);
}
console.log(`<${answer.join(", ")}>`);
