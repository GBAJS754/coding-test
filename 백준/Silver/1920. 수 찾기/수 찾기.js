var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr1 = new Set(input[1].split(" ").map(Number));
const arr2 = input[3].split(" ").map(Number);
const answer = [];

for (let i = 0; i < arr2.length; i++) {
  if (arr1.has(arr2[i])) {
    answer[i] = 1;
  } else {
    answer[i] = 0;
  }
}

console.log(answer.join("\n"));
