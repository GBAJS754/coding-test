var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0].split(" ")[1]);
const arr = input.slice(1).join("").split(" ").map(Number);

let answer = 0;
let temp = new Array({ length: arr.length }, () => 0);

const dfs = (L) => {
  if (L === arr.length) {
    let res = 0;
    if (temp.every((v) => v === 0)) return;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === 1) res += arr[i];
    }
    if (res === n) {
      answer++;
    }
  } else {
    temp[L] = 1;
    dfs(L + 1);
    temp[L] = 0;
    dfs(L + 1);
  }
};

dfs(0);

console.log(answer);
