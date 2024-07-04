let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

input = input.slice(1);
let temp = [];

for (let i = 0; i < input.length; i++) {
  const n = input[i];
  if (n.length === 3) {
    if (temp.length > 0) {
      const answer = bfs(temp, temp[0].length, temp.length);
      console.log(answer);
    }
    temp = Array.from({ length: n[1] }, () => Array(n[0]).fill(0));
  } else {
    temp[n[1]][n[0]] = 1;
  }

  if (i === input.length - 1) {
    if (temp.length > 0) {
      const answer = bfs(temp, temp[0].length, temp.length);
      console.log(answer);
    }
  }
}

function bfs(arr, xlen, ylen) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [];
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // 1일때
      if (arr[i][j] === 1) {
        queue.push([i, j]);
        arr[i][j] = 0;
        answer++;

        while (queue.length) {
          const [vx, vy] = queue.shift();

          for (let k = 0; k < 4; k++) {
            // 상하좌우
            const nx = vx + dx[k];
            const ny = vy + dy[k];

            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < ylen && // changed xlen to ylen
              ny < xlen && // changed ylen to xlen
              arr[nx][ny] === 1
            ) {
              queue.push([nx, ny]);
              // 지나온길 표시
              arr[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
  return answer;
}
