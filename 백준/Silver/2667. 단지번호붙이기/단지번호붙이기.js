let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split("").map(Number));
const len = Number(input[0].join(""));
input = input.slice(1);

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
const queue = [];
let answer = 0;
const arr = [];

// bfs
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 1) {
      let count = 0;
      input[i][j] = 0;
      queue.push([i, j]);
      answer++;

      while (queue.length) {
        const [vx, vy] = queue.shift();
        count++;
        for (let i = 0; i < dx.length; i++) {
          // 상하좌우 탐색
          const nx = vx + dx[i];
          const ny = vy + dy[i];
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < len &&
            ny < len &&
            input[nx][ny] === 1
          ) {
            // 상하좌우 1일경우
            // 이미 들린곳은 check를 해준다.
            input[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
      arr.push(count);
    }
  }
}

console.log(answer);
console.log(arr.sort((a, b) => a - b).join("\n"));
