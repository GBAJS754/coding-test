var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const n = Number(input[0]);
const m = Number(input[1]);
const temp = [];
const arr = [];

const dfs = (L) => {
  if (L === m) {
    arr.push(temp.join(" "));
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      temp.push(i);
      dfs(L + 1);
      temp.pop();
    }
  }
};

dfs(0);
console.log(arr.join("\n"));
