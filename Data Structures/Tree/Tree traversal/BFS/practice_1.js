class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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
        if (val === current.val) {
          return null;
        } else if (val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }
  // Breadth First Search
  BFS() {
    let current = this.root;
    let queue = [];
    let visited = [];
    // enqueue()
    console.log(queue);
    while (current) {
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      visited.push(current.val);
      current = queue.shift();
      console.log(current);
    }
    return visited;
  }
}

let tree = new BinaryTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);

console.log(tree.BFS());

let arr = [2, 3, 4, 5];
