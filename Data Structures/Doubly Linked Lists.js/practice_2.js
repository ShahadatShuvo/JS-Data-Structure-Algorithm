class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(head, tail, length) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let removedVal = this.tail.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      console.log(this.tail.prev);
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return removedVal;
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list);

console.log(list.pop());

console.log(list);
