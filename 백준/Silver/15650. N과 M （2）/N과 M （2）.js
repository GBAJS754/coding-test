var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const array = Array.from({ length: input[0] }, (_, index) => index + 1);

const getCombination = (arr, number) => {
  const result = [];

  if (number <= 1) {
    return arr.map((e) => [e]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)];
    const combinations = getCombination(rest, number - 1);
    const attached = combinations.map((e) => [fixed, ...e]);

    result.push(...attached);
  });

  return result;
};

const answer = getCombination(array, input[1]);

console.log(answer.map((e) => e.join(" ")).join("\n"));