/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let result = Infinity;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      result = Math.min(result, i + 1 - left);
      sum -= nums[left];
      left++;
    }
  }

  return result !== Infinity ? result : 0;
};

const result = minSubArrayLen(7, [2,3,1,2,4,3]); 
console.log(result);