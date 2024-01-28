var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const len = Number(input[0]);

for (let i = 1; i < len + 1; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    const str = input[i][j];
    const stackLen = stack.length;
    // 만약 str이 ) 이고 stack의 length-1이 ( 일떄 pop
    // 아닐경우 push
    if (str === ")" && stack[stackLen - 1] === "(") {
      stack.pop();
    } else {
      stack.push(str);
    }
  }
  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
