var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sangun = input[1].split(" ").map(Number);
const card = input[3].split(" ").map(Number);
const map = new Map();
const answer = [];

for (let i = 0; i < sangun.length; i++) {
  map.set(sangun[i], 1);
}
for (let i = 0; i < card.length; i++) {
  if (map.has(card[i])) {
    answer[i] = 1;
  } else {
    answer[i] = 0;
  }
}

console.log(answer.join(" "));
