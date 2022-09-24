// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
  display() {
    console.log(`${this.val}`);
  }
}

// Linked Lists is a data structure that contains a head, tail and length property.
class SinglyLinkedList {
  constructor(head, tail, length) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // This traverse() method will return an array of all the values of linked list
  traverse() {
    let current = this.head;
    let start = 0;
    let end = this.length;
    let arr = [];
    while (start < end) {
      start++;
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  // This push() method can insert a new Node from the end of the linked list.
  push(value) {
    let newNode = new Node(value);
    console.log(newNode);
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
  // Removing a node from the end of the Linked List!
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this;
  }

  //The shift() method removes the first node from linked list
  shift() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    this.head = this.head.next;
    this.length--;
    return this;
  }

  // unshift(): Adding a new node to the beginning of the Linked List!
  unshift(val) {
    let newAddedNode = new Node(val);
    console.log(newAddedNode);
    newAddedNode.next = this.head;
    this.head = newAddedNode;
    this.length++;
    return this;
  }

  // get(): Retrieving a node by it's position in the Linked List!
  get(index) {
    if (index < 1 || index > this.length) return null;

    let current = this.head;
    let i = 1;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  // set(): Changing the value of a node based on it's position in the Linked List
  set(pos, val) {}
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");
// first.display();
// first.next.next.next.next.display();
// console.log(first);

let list = new SinglyLinkedList();
console.log(list);
list.push(10);
list.push(20);
// list.push(30);
console.log(list);

console.log(list.traverse());
// console.log(list.pop());

console.log(list.shift());

list.unshift(50);
list.unshift(40);
list.unshift(30);
console.log(list);

console.log(list.get(1));
