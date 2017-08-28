/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  const helper = (builder, open, close) => {
    if (close === n) {
      result.push(builder);
    }

    if (open < n) {
      helper(builder + '(', open + 1, close);
    }

    if (open > close){
      helper(builder + ')', open, close + 1);
    }
  };

  helper('', 0, 0);
  return result;
};

const result = generateParenthesis(3);
console.log(result);
