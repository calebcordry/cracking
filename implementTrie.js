class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.terminal = false;
  }
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new Node('*');
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let current = this.root;
  for (let char of word) {
    if (!current.children[char]) {
      const node = new Node(char);
      current.children[char] = node;
    }
    current = current.children[char];
  }
  current.terminal = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let current = this.root;
  for (let char of word) {
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  return current.terminal;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let current = this.root;
  for (let char of prefix) {
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
