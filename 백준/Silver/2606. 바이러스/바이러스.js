let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const m = input[0][0];
const arr = Array.from({ length: m + 1 }, () => []);
input = input.slice(2);

// 연결리스트, 양방향
for (let [a, b] of input) {
  arr[a].push(b);
  arr[b].push(a);
}

const check = [1];
const queue = [1];

while (queue.length) {
  const v = queue.shift();

  for (let n of arr[v]) {
    // 이미 들린곳은 들리지않는다.
    if (check.includes(n)) continue;
    check.push(n);
    queue.push(n);
  }
}
console.log(check.length - 1); // 자기 자신 빼기
