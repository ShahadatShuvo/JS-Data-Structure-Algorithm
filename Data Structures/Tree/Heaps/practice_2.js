class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    console.log(this.values);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    console.log(element);
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      console.log(parent);
      if (element <= parent || parent === undefined) break;

      console.log(parent);

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();

console.log(heap);

heap.insert(55);

console.log(heap);

heap.insert(2);
heap.insert(4);
heap.insert(6);
heap.insert(10);

console.log(heap);

heap.extractMax();

console.log(heap);
