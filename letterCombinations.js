/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) { return []; }

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  const helper = (index, builder) => {
    if (index === digits.length) {
      return result.push(builder);
    }

    const digit = digits[index];
    const choices = map[digit];

    for (let char of choices) {
      helper(index + 1, builder + char);
    }
  };

  helper(0, '');
  return result;
};


const result = letterCombinations('23');
console.log(result);
