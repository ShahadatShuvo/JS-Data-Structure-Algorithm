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

  shift() {
    if (this.length === 0) return undefined;
    let shiftedVal = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return shiftedVal;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    console.log(Math.floor(this.length - 1 / 2));
    if (index <= Math.floor((this.length - 1) / 2)) {
      let current = this.head;
      for (let i = 0; i < Math.floor(this.length - 1 / 2); i++) {
        current = current.next;
        console.log(current);
        if (i === index) {
          console.log(i, index, current);
          return current;
          break;
        }
      }
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i >= Math.floor(this.length - 1 / 2); i--) {
        current = current.prev;
        console.log(current);
        if (i === index) {
          return current;
          break;
        }
      }
    }
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

console.log(list.shift());

console.log(list);

console.log(list.unshift(80));
console.log(list.unshift(70));
console.log(list.unshift(60));
console.log(list.unshift(50));

console.log(list.get(2));

console.log(list.get(4));
