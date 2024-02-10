var input = require("fs").readFileSync("/dev/stdin").toString();

const dp = [];

dp[1] = [1];
dp[2] = [2, 1];
dp[3] = [3, 1];

for (let i = 4; i <= input; i++) {
  dp[i] = [i, ...dp[i - 1]];

  if (i % 2 === 0) {
    if (dp[i].length > dp[i / 2].length + 1) {
      dp[i] = [i, ...dp[i / 2]];
    }
  }
  if (i % 3 === 0) {
    if (dp[i].length > dp[i / 3].length + 1) {
      dp[i] = [i, ...dp[i / 3]];
    }
  }
}
console.log(dp[Number(input)].length - 1);
console.log(dp[Number(input)].join(" "));