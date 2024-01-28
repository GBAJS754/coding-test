var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const len = Number(input[0]);

const stack = [];

for (let i = 1; i < len + 1; i++) {
  // 0일때 pop한다
  // 아닐 경우 push한다
  if (Number(input[i]) === 0) {
    stack.pop();
  } else {
    stack.push(Number(input[i]));
  }
}

console.log(!stack.length ? 0 : stack.reduce((acc, curr) => acc + curr));
