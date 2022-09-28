// FIFO

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.size++;
    return this;
  }
  dequque() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.val;
  }
}

let queue = new Queue();
console.log(queue);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue);

console.log(queue.dequque());
