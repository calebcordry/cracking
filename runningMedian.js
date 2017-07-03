const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const runningMedian = array => {

};

const swap = (array, index1, index2) => {
  const tmp = array[index1];
  array[index1] =  array[index2];
  array[index2] = tmp;
};

class Heap {
  constructor(scoringFunction) {
    this.scoringFunction = scoringFunction || () => a > b;
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

  bubbleDown() {
    let parentIndex = 1;
    let leftChildIndex = parentIndex * 2;
    let rightChildIndex = parentIndex * 2 + 1;

    while(leftChildIndex < this.storage.length) {
      const parent = this.storage[parentIndex];
      const leftChild = this.storage[leftChildIndex];
      const rightChild = this.storage[rightChildIndex];
      
      let smallestChildIndex = leftChildIndex;

      if (rightChild && rightChild < leftChild) {
        smallestChildIndex = rightChildIndex;
      }
      
      if (parent <= this.storage[smallestChildIndex]) { break; }
      
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

      if (parent <= item) { break; }
      
      swap(this.storage, index, parentIndex);
      index = parentIndex;
    }
  }
}

// index at 1;
// parent = Math.floor(k / 2);
// leftChild = k * 2;
// rightChild = k * 2 + 1;

const h = new Heap();
h.add(10);
console.log(h.storage);
h.add(6);
console.log(h.storage);
h.add(1);
console.log(h.storage);
h.add(3);
console.log(h.storage);
h.pop();
console.log(h.storage);