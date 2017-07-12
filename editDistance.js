/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1.length === 0) { return word2.length; }
  if (word2.length === 0) { return word1.length; }
    
  const helper = (first, second, secondIndex) => {

  };

  return helper(word1, word2, 0, 0);
};

const res = minDistance('', 'b');
console.log(res);