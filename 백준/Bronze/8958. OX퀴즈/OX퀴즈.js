var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  const arr = [];
  for (let j = 0; j < input[i].length; j++) {
    const score = input[i][j];
    if (score === "O") {
      arr[j] = 1;
      if (arr[j - 1] > 0) {
        arr[j] = arr[j - 1] + 1;
      }
    } else {
      arr[j] = 0;
    }
  }
  console.log(arr.reduce((acc, curr) => acc + curr));
}
