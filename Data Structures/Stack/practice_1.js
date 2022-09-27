// Stack -> LIFO

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}

let stack = new Stack();
console.log(stack);
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);

console.log(stack.pop());

console.log(stack);
