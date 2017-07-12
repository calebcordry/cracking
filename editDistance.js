/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1.length === 0) { return word2.length; }
  if (word2.length === 0) { return word1.length; }
  
  const memo = [];
  for (let i = 0; i <= word1.length; i++) {
    memo.push(new Array(word2.length).fill(null));
  }
  
  const helper = (index1, index2) => {
    if (index1 === word1.length) { 
      return word2.length - index2; 
    }

    if (index2 === word2.length) { 
      return word1.length - index1; 
    }

    if (memo[index1][index2] !== null) {
      return memo[index1][index2];
    }

    let result;

    if (word1[index1] === word2[index2]) {
      result = helper(index1 + 1, index2 + 1);
      memo[index1][index2] = result;
      return result;
    }

    const replace = 1 + helper(index1 + 1, index2 + 1);
    const remove = 1 + helper(index1 + 1, index2);
    const del = 1 + helper(index1, index2 + 1);

    result = Math.min(replace, remove, del);
    memo[index1][index2] = result;
    return result;
  };

  return helper(0, 0);
};

const res = minDistance('set', 'eat');
console.log(res);