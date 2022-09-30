class Node {
  constructor(val, right, left) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//                10
//          8            20
//       5     9      15     30
//     3   6    11  13     28   40

class BinartTree {
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
        if (val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        } else if (val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else {
          return undefined;
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return current;
      } else if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      }
    }
  }
}

let tree = new BinartTree();

console.log(tree);
tree.insert(10);
tree.insert(8);
tree.insert(20);
tree.insert(30);
tree.insert(18);

console.log(tree);

console.log(tree.find(20));
console.log(tree.find(18));
console.log(tree.find(19));
