let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input[0].split(" ")[0];
const m = input[0].split(" ")[1];
input = input.slice(1).map((v) => v.split("").map(Number));

const x = [-1, 1, 0, 0];
const y = [0, 0, 1, -1];

// bfs
// 가중치를 주고 도착 인덱스를 출력
// [ 1, 2, 0, 8, 9, 0 ],
// [ 2, 3, 0, 7, 8, 0 ],
// [ 3, 4, 5, 6, 7, 8 ],
// [ 4, 5, 6, 7, 0, 9 ]

const queue = [[0, 0]];

while (queue.length) {
  const [vx, vy] = queue.shift();

  for (let i = 0; i < 4; i++) {
    // [0,0] 기준으로 상하좌우를 돌아야합니다.
    let nx = vx + x[i];
    let ny = vy + y[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m && input[nx][ny] === 1) {
      // 이동 가능 : 0보다 클때, 인덱스가 배열을 초과하지 않을때
      // 0보다 클때가 아니라 1일때 0보다 클때하면 이미 지나온 길도 다시 돌아가서 무한 루프에 빠짐
      queue.push([nx, ny]);
      input[nx][ny] = input[vx][vy] + 1;
    }
  }
}

console.log(input[n - 1][m - 1]);
