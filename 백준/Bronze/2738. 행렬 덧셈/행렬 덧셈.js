var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const cutter = input[0].split(" ");
const modifyCutter = Number(cutter[0]) + 1;
const arr1 = input.slice(1, modifyCutter);
const arr2 = input.slice(modifyCutter, input.length);
const answer = [];

for (let i = 0; i < arr1.length; i++) {
  let tempAnswer = "";
  const newArr1 = arr1[i].split(" ");
  const newArr2 = arr2[i].split(" ");
  for (let k = 0; k < newArr1.length; k++) {
    tempAnswer += Number(newArr1[k]) + Number(newArr2[k]) + " ";
  }
  answer.push(tempAnswer);
}

console.log(answer.join(" "));
