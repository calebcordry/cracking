/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let low = i + 1;
      let high = nums.length - 1;
      let needed = 0 - nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === needed) {
          result.push([nums[i], nums[low], nums[high]]);

          while (low < high && nums[low] === nums[low + 1]) { low++; }
          while (low < high && nums[high] === nums[high - 1]) { high--; }
          low++;
          high--;
        }

        else if (nums[low] + nums[high] > needed) {
          high--;
        }

        else {
          low++;
        }
      }
    }
  }

  return result;
};

const s = [-1, 0, 1, 2, -1, 100, -4];
const result = threeSum(s);
console.log(result);
