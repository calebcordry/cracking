/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  this.map = {};
  this.set = new Set();

  for (let word of dictionary) {
    if (!this.set.has(word)) {
      const abbr = this.makeAbbr(word);
      this.set.add(word);
      this.map[abbr] = this.map[abbr] + 1 || 1;
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  const abbr = this.makeAbbr(word);

  if (this.set.has(word)) {
    return this.map[abbr] < 2;
  }

  return !this.map[abbr];
};

ValidWordAbbr.prototype.makeAbbr = function(word) {
  if (word.length < 3) {
    return word;
  }
  return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */

const dictionary = ['deer', 'door', 'cake', 'card'];
const vwa = new ValidWordAbbr(dictionary);
console.log(vwa.isUnique('dear'));
console.log(vwa.isUnique('cart'));
console.log(vwa.isUnique('cane'));
console.log(vwa.isUnique('make'));
