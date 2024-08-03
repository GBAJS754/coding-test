let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => v.map(Number));

const m = input[0][1];
input = input.slice(1);
const chicken = [];
const home = [];
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 1) {
      home.push([i + 1, j + 1]);
    } else if (input[i][j] === 2) {
      chicken.push([i + 1, j + 1]);
    }
  }
}
// 도시의 치킨 거리의 최솟값 구하기
// 도시의 치킨 거리 : 모든 집의 치킨 거리의 합 => 최솟값

const chickenDistance = (arr) => {
  let sum = 0;
  for (let i = 0; i < home.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < arr.length; j++) {
      const [nx, ny] = home[i];
      const [dx, dy] = chicken[arr[j]];
      const distance = Math.abs(nx - dx) + Math.abs(ny - dy);
      min = Math.min(distance, min);
    }
    sum += min;
  }
  return sum;
};

// 폐업 시키지 않을 치킨집 조합을 구하기
const temp = [];

const dfs = (L, v) => {
  if (temp.length === m) {
    answer = Math.min(answer, chickenDistance(temp));
    return;
  } else {
    for (let i = v; i < chicken.length; i++) {
      if (!temp.includes(i)) {
        temp.push(i);
        dfs(L + 1, i);
        temp.pop();
      }
    }
  }
};

dfs(0, 0);

console.log(answer);