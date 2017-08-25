/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.storage = [];
  this.sum = 0;
  this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.storage.length === this.size) {
    const shift = this.storage.shift();
    this.sum -= shift;
  }

  this.storage.push(val);
  this.sum += val;

  return this.sum / this.storage.length;
};

const avg = new MovingAverage(3);
avg.next(1);
avg.next(10);
avg.next(3);
avg.next(5);
