/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = [];
  this.lastIndex = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.lastIndex++;
  this.storage[this.lastIndex] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const result = this.storage[this.lastIndex];
  this.storage[this.lastIndex] = null;
  this.lastIndex--;
  return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.lastIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.lastIndex === 0) {
    return null;
  }
  let min = this.storage[0];
  for (let i = 1; i <= this.lastIndex; i++) {
    if (this.storage[i] < min) {
      min = this.storage[i];
    }
  }
  return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
