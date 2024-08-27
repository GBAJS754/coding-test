let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => v.map(Number));

const s = input[0][1];
const arr = input[1];
let min = Infinity;
let start = 0;
let sum = 0;

for (let end = 0; end < arr.length; end++) {
  sum += arr[end];
  if (sum >= s) {
    min = Math.min(min, Math.abs(start - end));
  }

  while (sum >= s) {
    sum -= arr[start];
    min = Math.min(min, Math.abs(start - end));
    start++;
  }
}
// 합을 만드는게 불가능 할경우 0을 출력
console.log(min === Infinity ? 0 : min + 1);
