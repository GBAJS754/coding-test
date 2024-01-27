var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const n = input[0];
const m = input[1];

const array = Array.from({ length: n }, (_, index) => index + 1);
const getPermutation = (arr, number) => {
  const result = [];

  if (number <= 1) return arr.map((e) => [e]); // 재귀 종료 조건

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = getPermutation(rest, number - 1);
    const attached = permutation.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
};

const answer = getPermutation(array, m);

console.log(answer.map((e) => e.join(" ")).join("\n"));
