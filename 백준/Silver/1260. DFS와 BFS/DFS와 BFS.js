let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const n = input[0][0]; // 정점의 개수
const v = input[0][2]; // 시작할 정점의 번호
input = input.slice(1);
const arr = Array.from(Array(n + 1), () => []);
const dfsArr = [];
const bfsArr = [];
const bfsAnswer = [];

for (let [a, b] of input) {
  arr[a].push(b);
  arr[b].push(a);
}
// 정점번호가 작은 것을 먼저 방문한다.
arr.map((v) => v.sort((a, b) => a - b));
dfsArr.push(v);

const dfs = (L) => {
  if (dfsArr.length === n) {
    return;
  } else {
    for (let i = 0; i < arr[L].length; i++) {
      // 이미 들린곳은 들리지않는다.
      if (!dfsArr.includes(arr[L][i])) {
        dfsArr.push(arr[L][i]);
        dfs(arr[L][i]);
      }
    }
  }
};

dfs(v);
// bfs는 queue로
bfsArr.push(v);

while (bfsArr.length) {
  const vn = bfsArr.shift();
  bfsAnswer.push(vn);
  for (let i = 0; i < arr[vn].length; i++) {
    if (!bfsArr.includes(arr[vn][i]) && !bfsAnswer.includes(arr[vn][i])) {
      bfsArr.push(arr[vn][i]);
    }
  }
}

console.log(dfsArr.join(" "));
console.log(bfsAnswer.join(" "));
