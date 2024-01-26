var input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // 백준 제출용

function solution() {
  var a = parseInt(input[0]);
  var b = parseInt(input[1]);
  return console.log(a + b);
}

solution();
