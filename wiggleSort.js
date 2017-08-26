const swap = (array, a, b) => {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {

    if (i % 2) {
      if (nums[i] < nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    }

    else {
      if (nums[i] > nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    }
  }

  return nums;
};

const res = wiggleSort([3, 5, 2, 1, 6, 4]);
console.log(res);
