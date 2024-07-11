let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const answer = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    answer.push(i);
  }
}

console.log(answer.sort((a, b) => a - b).join("\n"));
