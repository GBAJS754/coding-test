var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const arr = [1, 1, 2, 2, 2, 8];
const answer = [];
for (let i = 0; i < arr.length; i++) {
  answer.push(arr[i] - input[i]);
}

console.log(answer.join(" "));
