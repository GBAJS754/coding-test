let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input.slice(1);
arr = arr.map((v) => v.split(" ").map((c) => Number(c)));

const answer = [];
for (let i = 0; i < arr.length; i++) {
  const n = arr[i];
  let score = 0;
  for (let j = 0; j < arr.length; j++) {
    const m = arr[j];
    if (n[0] < m[0] && n[1] < m[1]) {
      score++;
    }
  }
  answer.push(score + 1);
}
console.log(answer.join(" "));
