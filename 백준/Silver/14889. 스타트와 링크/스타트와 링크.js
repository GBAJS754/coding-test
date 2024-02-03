var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [...input.slice(1)]
  .map((v) => v.split(" "))
  .map((v) => v.map((v) => Number(v)));
const check = Array.from({ length: n }, () => 0);
let answer = Number.MAX_SAFE_INTEGER;

// 조합구하기
const dfs = (L, s) => {
  if (L === n / 2) {
    let start = [];
    let link = [];
    let sSum = 0;
    let lSum = 0;
    for (let i = 0; i < check.length; i++) {
      check[i] === 1 ? start.push(i + 1) : link.push(i + 1);
    }
    for (let i = 0; i < start.length; i++) {
      for (let j = i + 1; j < start.length; j++) {
        sSum =
          sSum +
          arr[start[i] - 1][start[j] - 1] +
          arr[start[j] - 1][start[i] - 1];
        lSum =
          lSum + arr[link[i] - 1][link[j] - 1] + arr[link[j] - 1][link[i] - 1];
      }
    }
    answer = Math.min(answer, Math.abs(sSum - lSum));
  } else {
    for (let i = s; i <= n; i++) {
      check[i - 1] = 1;
      dfs(L + 1, i + 1);
      check[i - 1] = 0;
    }
  }
};
dfs(0, 1);

console.log(answer);
