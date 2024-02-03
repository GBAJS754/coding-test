var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const m = Number(input[0]);
const arr = input.slice(1);
const sum = [0, 1, 2, 4];

for (let i = 0; i < m; i++) {
  const num = arr[i];
  for (let j = 4; j <= num; j++) {
    sum[j] = sum[j - 1] + sum[j - 2] + sum[j - 3];
  }
  console.log(sum[num]);
}
