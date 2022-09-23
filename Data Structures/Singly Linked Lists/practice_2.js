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
  //The unshift() method inserts new node from the beggining on the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // The get(index) method returns the node of the specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      console.log(current);
      counter++;
    }
    return current;
  }
  // The set() method receives two value set(index, value) and changes the previous value of that indexed position with the given value. after successfully done, it return true, otherwise false.
  set(index, val) {
    let getNode = this.get(index);
    getNode.val = val;
    console.log(getNode);
    return this;
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
list.unshift(40);
console.log(list.unshift(50));
console.log(list.unshift(60));
console.log(list.get(2).val);
console.log(list.set(2, 90));
