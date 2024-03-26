let input = require("fs").readFileSync("/dev/stdin").toString();

let n = Number(input);
let tempIndex = 1;

while (n > 0) {
  n -= tempIndex;
  if (n > 0) tempIndex++;
}

const order = tempIndex + n;
const answer =
  tempIndex % 2 === 0
    ? `${order}/${tempIndex - order + 1}`
    : `${tempIndex - order + 1}/${order}`;

console.log(answer);
