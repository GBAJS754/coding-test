let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// 0은 빈칸
// 1은 벽
// 2는 바이러스
// 세울수 있는 벽의 개수 3개
input = input.slice(1);
let answer = 0; // 0의 개수

// 안전지역 개수
const countSafeArea = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
};

// 감염
const bfs = (newArr) => {
  let arr = newArr.map((v) => [...v]);
  const x = [-1, 1, 0, 0];
  const y = [0, 0, -1, 1];
  const xlen = arr.length;
  const ylen = arr[0].length;
  const queue = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const n = arr[i][j];
      if (n === 2) {
        queue.push([i, j]);
        arr[i][j] = 3;

        while (queue.length) {
          const [vx, vy] = queue.shift();
          for (let i = 0; i < 4; i++) {
            const dx = vx + x[i];
            const dy = vy + y[i];
            if (
              dx >= 0 &&
              dy >= 0 &&
              dx < xlen &&
              dy < ylen &&
              arr[dx][dy] === 0
            ) {
              queue.push([dx, dy]);
              arr[dx][dy] = 3;
            }
          }
        }
      }
    }
  }

  answer = Math.max(countSafeArea(arr), answer);
};

// 벽세우기
// 벽을 어떻게 세우지..??? 백트래킹,,완전탐색,,,
const dfs = (L) => {
  if (L === 3) {
    bfs(input);
    return;
  } else {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 0) {
          input[i][j] = 1;
          dfs(L + 1);
          input[i][j] = 0;
        }
      }
    }
  }
};

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 0) {
      input[i][j] = 1;
      dfs(1);
      input[i][j] = 0;
    }
  }
}
console.log(answer);
