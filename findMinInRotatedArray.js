/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const last = nums.length - 1;

  const BS = (start, stop) => {
    const mid = Math.ceil((stop + start) / 2);

    if (start == stop || nums[start] < nums[stop]) {
      return nums[start];
    }

    if (nums[stop] < nums[mid - 1]) {
      return BS(mid, stop);
    }

    return BS(0, mid - 1);
  };

  return BS(0, last);
};


const result = findMin([5,6,1,2,3,4]);
console.log(result);
