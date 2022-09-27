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
list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);

var removeNthFromEnd = function (head, n) {
  if (!head) return null;
  if (!head.next && n === 1) return null;
  let len = 0;
  let current = head;
  while (current.next) {
    len++;
    current = current.next;
  }
  if (len === n - 1) {
    head = head.next;
    return head;
  }

  let queryIndex = len - n;
  let currentPrev = head;
  let currentNext = head.next;
  while (queryIndex) {
    currentPrev = currentNext;
    currentNext = currentNext.next;
    queryIndex--;
  }
  currentPrev.next = currentNext.next;
  return head;
};
let res = removeNthFromEnd(list.head, 1);
console.log(res);
