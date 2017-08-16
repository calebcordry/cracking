/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  const helper = (open, close, builder) => {
    if (builder.length === n * 2) {
      result.push(builder);
    }

    if (open < n) {
      helper(open + 1, close, builder + '(');
    }

    if (close < open) {
      helper(open, close + 1, builder + ')');
    }
  };

  helper(0, 0, '');
  return result;
};

const res = generateParenthesis(3);
console.log(res);
