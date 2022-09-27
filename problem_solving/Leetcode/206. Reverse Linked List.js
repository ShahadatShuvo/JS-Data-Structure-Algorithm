/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

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
}

let list = new SinglyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);

var reverseList = function (head) {
  if (!head) return head;
  if (head.next) {
    let current = head.next;
    let newNode = { val: head.val, next: null };
    head = newNode;
    //   newNode.next = head;
    while (current) {
      let newNode = { val: current.val, next: null };
      newNode.next = head;
      head = newNode;
      current = current.next;
    }
  }
  return head;
};

let res = reverseList(list.head);
console.log(res);
