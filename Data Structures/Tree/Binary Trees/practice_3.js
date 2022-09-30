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
  insertion(val) {
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
}

let tree = new BinartTree();

console.log(tree);
tree.insertion(10);
tree.insertion(8);
tree.insertion(20);
tree.insertion(30);
tree.insertion(18);

console.log(tree);
