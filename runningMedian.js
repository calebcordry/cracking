const input = require('./input');

const swap = (array, index1, index2) => {
  const tmp = array[index1];
  array[index1] =  array[index2];
  array[index2] = tmp;
};

class Heap {
  constructor(scoringFunction) {
    if (!scoringFunction) {
      scoringFunction = (a, b) => a <= b;
    }

    this.scoringFunction = scoringFunction;
    this.storage = [null];
  }

  add(value) {
    this.storage.push(value);
    this.bubbleUp();
  }

  pop() {
    swap(this.storage, 1, this.storage.length - 1);
    const result = this.storage.pop();
    this.bubbleDown();
    return result;
  }

  peek() {
    return this.storage[1];
  }

  length() {
    return this.storage.length - 1;
  }

  bubbleDown() {
    let parentIndex = 1;
    let leftChildIndex = parentIndex * 2;
    let rightChildIndex = parentIndex * 2 + 1;

    while(leftChildIndex < this.storage.length) {
      const parent = this.storage[parentIndex];
      const leftChild = this.storage[leftChildIndex];
      const rightChild = this.storage[rightChildIndex];
      
      let smallestChildIndex = leftChildIndex;

      if (rightChild && this.scoringFunction(rightChild, leftChild)) {
        smallestChildIndex = rightChildIndex;
      }
      
      if (this.scoringFunction(parent, this.storage[smallestChildIndex])) { break; }
      
      swap(this.storage, smallestChildIndex, parentIndex);
      parentIndex = smallestChildIndex;
      leftChildIndex = parentIndex * 2;
      rightChildIndex = parentIndex * 2 + 1;
    }
  }

  bubbleUp() {
    let index = this.storage.length - 1;

    while (index > 1) {
      const item = this.storage[index];
      const parentIndex = Math.floor(index / 2);
      const parent = this.storage[parentIndex];

      if (this.scoringFunction(parent, item)) { break; }
      
      swap(this.storage, index, parentIndex);
      index = parentIndex;
    }
  }
}

class MedianFinder {
  constructor() {
    this.minHeap = new Heap();
    this.maxHeap = new Heap((a, b) => a >= b);
    this.count = 0; 
    this.first = null;
  }

  add(value) {
    if (this.count < 1) {
      this.first = value;
      return this.count++;
    }

    if (this.count == 1) {
      const smaller = Math.min(this.first, value);
      const larger = Math.max(this.first, value);
      this.maxHeap.add(smaller);
      this.minHeap.add(larger);
      return this.count++;
    }

    if (value <= this.maxHeap.peek()) {
      this.maxHeap.add(value);
    }

    else {
      this.minHeap.add(value);
    }

    this.rebalanceIfNeeded();
  }

  rebalanceIfNeeded() {
    if (Math.abs(this.maxHeap.length() - this.minHeap.length()) < 2) { return; }

    if(this.maxHeap.length() > this.minHeap.length()) {
      this.minHeap.add(this.maxHeap.pop());
    }

    if(this.minHeap.length() > this.maxHeap.length()) {
      this.maxHeap.add(this.minHeap.pop());
    }
  }

  getMedian() {
    if (this.count === 0) { return; }
    if (this.count === 1) { return this.first; }

    if (this.maxHeap.length() === this.minHeap.length()) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }

    if (this.maxHeap.length() > this.minHeap.length()) {
      return this.maxHeap.peek();
    }

    return this.minHeap.peek();
  }
}

const doWork = array => {
  const medianFinder = new MedianFinder();
  for (let i = 0; i < array.length; i++) {
    medianFinder.add(array[i]);
    const median = medianFinder.getMedian().toFixed(1);
    console.log(median);
  }
};

doWork(input.split('\n').slice(1).map(Number));