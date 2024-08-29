let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = Number(input);
// 1. 소수 구하기
const arr = [];

for (let i = 2; i <= input; i++) {
  let count = 0;
  for (let j = 1; j <= Math.sqrt(i); j++) {
    if (count > 1) break;
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 1) arr.push(i);
}
// 2. 연속된 소수의 합이 n인 경우 구하기 => 투포인터
let start = 0;
let sum = 0;
let answer = 0;
for (let end = 0; end < arr.length; end++) {
  sum += arr[end];

  while (sum >= input) {
    if (sum === input) {
      answer++;
    }
    sum -= arr[start];
    start++;
  }
}
console.log(answer);
