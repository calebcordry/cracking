/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = [];
  this.currentMin = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if(this.currentMin === null || x < this.currentMin) {
    this.currentMin = x;
  }
  this.storage.push([x, this.currentMin]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.storage.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (!this.storage.length) { return null; }
  return this.storage[this.storage.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (!this.storage.length) { return null; }
  return this.storage[this.storage.length - 1][1];
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
minStack.push(2147483646);
minStack.push(2147483646);
minStack.push(2147483647);
minStack.top();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.push(2147483647);
minStack.top();
minStack.getMin();
minStack.push(-2147483648);
minStack.top();
minStack.getMin();
minStack.pop();
minStack.getMin();