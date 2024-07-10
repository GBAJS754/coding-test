let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// 3 테스트 케이스의 수
// 1 0 문서의 개수와 몇번째로 인쇄되었는지 궁금한 문서 (0번 인덱스부터 시작)
// 5 문서의 중요도
// 4 2
// 1 2 3 4
// 6 0
// 1 1 9 1 1 1
input = input.slice(1);

const print = (arr, findIndex) => {
  const queue = [];
  while (arr.length) {
    const n = arr.shift();
    if (arr.some((v) => v[0] > n[0])) {
      arr.push(n);
    } else {
      queue.push(n);
    }
  }
  let answer = 0;
  queue.forEach((v, index) => {
    if (v[1] === findIndex) {
      answer = index;
    }
  });
  return answer + 1;
};

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    const findIndex = input[i][1];
    const arr = input[i + 1];
    const map = [];
    arr.forEach((v, index) => {
      map.push([v, index]);
    });
    console.log(print(map, findIndex));
  }
}
