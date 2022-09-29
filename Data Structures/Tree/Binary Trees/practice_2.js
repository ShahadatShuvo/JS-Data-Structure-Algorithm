// Finding a Node in BST

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (current) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    let current = this.root;
    if (current.val === val) {
      return current;
    } else {
      while (current) {
        if (val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            return undefined;
          }
        } else if (val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            return undefined;
          }
        } else {
          return current;
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(8);
tree.insert(30);
tree.insert(10);
tree.insert(7);
console.log(tree);

console.log(tree.find(10));
console.log(tree.find(30));
console.log(tree.find(20));
console.log(tree.find(15));
console.log(tree.find(8));
