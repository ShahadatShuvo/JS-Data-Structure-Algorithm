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
