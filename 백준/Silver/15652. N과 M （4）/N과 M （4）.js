var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const n = Number(input[0]);
const m = Number(input[1]);
const temp = Array.from({ length: m }, () => 0);
const arr = [];

const dfs = (L, s) => {
  if (L === m) {
    arr.push(temp.join(" "));
  } else {
    for (let i = s; i <= n; i++) {
      // 1,2,3,4 => 2,3,4 => 3,4 => 4
      temp[L] = i;
      dfs(L + 1, i);
    }
  }
};

dfs(0, 1);

console.log(arr.join("\n"));
