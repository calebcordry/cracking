const getRange = (num1, num2) => {
  if (num1 === num2) {
    return num1.toString();
  }
  return `${num1}->${num2}`;
};

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const result = [];
  let next = lower;

  for (let num of nums) {
    if (num < next) { continue; }

    if (num === next) {
      next++;
      continue;
    }

    result.push(getRange(next, num - 1));
    next = num + 1;
  }

  if (next <= upper) {
    result.push(getRange(next, upper));
  }

  return result;
};

// const input = [-1];
const input = [0, 1, 3, 50, 75];
const result = findMissingRanges(input, 0, 99);
console.log(result);
