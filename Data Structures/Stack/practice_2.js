// LIFO

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
      newNode.next = this.last;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.last.val;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      this.size = 0;
    } else {
      this.last = this.last.next;
    }
    this.size--;
    return temp;
  }
}

let stack = new Stack();

console.log(stack);

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack);

console.log(stack.pop()); // 50
console.log(stack.pop()); // 40
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
