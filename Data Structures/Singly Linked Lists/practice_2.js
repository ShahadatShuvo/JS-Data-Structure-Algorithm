class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //The push() method inserts a node from the last into linked list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  //The shift() method removes the last node from linked list
  pop() {
    if (this.length === 0) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    console.log(newTail.val, current.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //The shift() method removes the first node from linked list
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log(currentHead);
    console.log(this.head);
    return currentHead;
  }
}

let list = new SinglyLinkedList();
// list.push("hello");
// list.push("goodbye");
list.push(100);
// list.push(200);
// list.push(300);

console.log(list);

console.log(list.head);
console.log(list.tail);

list.traverse();
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list);

console.log(list.shift());
console.log(list.shift());
