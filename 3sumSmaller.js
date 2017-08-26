/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b);

  let count = 0;
  let len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) {
        count += right - left;
        left++;
      }
      else {
        right--;
      }
    }
  }

  return count;
};

const result = threeSumSmaller([-3,-1,-4,-4,0,2,-2], -8);
console.log(result);
