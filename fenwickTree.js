class FenwickTree {
  constructor(array) {
    this.storage = new Array(array.length + 1);
  }
}

const array = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];
const ft = new FenwickTree(array);
