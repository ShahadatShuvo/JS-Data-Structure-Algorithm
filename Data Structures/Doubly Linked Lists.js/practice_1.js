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

  // This push() method can insert a new Node from the end of the linked list.
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

  // Removing a node from the end of the Linked List!
  pop() {
    if (!this.head) return undefined;

    let poppedVal = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    console.log(poppedVal);
    return poppedVal.val;
  }

  //The shift() method removes the first node from linked list
  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }
}

let list = new DoublyLinkedList();
console.log(list);
list.push(10);
console.log(list);
list.push(20);
list.push(30);
list.push(40);
console.log(list);
console.log(list.pop());
console.log(list);

console.log(list.shift());
