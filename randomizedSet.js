function random(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.storage = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.hasOwnProperty(val)) { return false; }
  this.storage.push(val);
  this.map[val] = this.storage.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.hasOwnProperty(val)) { return false; }
  
  const location = this.map[val];
  
  if (location !== this.storage.length - 1) {
    const last = this.storage[this.storage.length - 1];
    this.map[last] = location;
    this.storage[location] = last;
  }

  delete this.map[val];
  this.storage.pop();
  
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const index = random(this.storage.length);
  return this.storage[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const s = new RandomizedSet();
s.insert(4);
s.insert(6);
s.insert(9);
s.getRandom();

console.log('cool')