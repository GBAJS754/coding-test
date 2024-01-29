var input = require("fs").readFileSync("/dev/stdin").toString();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    // 추가
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    // 삭제
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

const queue = new Queue();

for (let i = 0; i < Number(input); i++) {
  queue.enqueue(i + 1);
}

const recursion = (queue) => {
  if (!queue.head.next) {
    return queue.head.value;
  } else {
    queue.dequeue();
    queue.enqueue(queue.head.value);
    queue.dequeue();
    recursion(queue);
  }
};

recursion(queue);
console.log(queue.head.value);