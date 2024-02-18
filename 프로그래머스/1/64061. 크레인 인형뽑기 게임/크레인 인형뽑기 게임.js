function solution(board, moves) {
    const newBoard = [];
    const stack = [];
    let answer = 0;

    for (let i = 0; i < board.length; i++) {
      const temp = [];
      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] !== 0) {
          temp.push(board[j][i]);
        }
      }
      newBoard.push(temp.reverse());
    }

    for (let i = 0; i < moves.length; i++) {
      const len = stack.length;
      const num = newBoard[moves[i] - 1].pop();
      if (num) {
        if (num === stack[len - 1]) {
          stack.pop();
          answer++;
          answer++;
        } else {
          stack.push(num);
        }
      }
    }
     return answer
}