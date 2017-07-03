/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force
const lengthOfLIS = nums => {
  const recurse = (length, index, lastTaken) => {
    if (index > nums.length -1){ return length; }

    const current = nums[index];
    let taken = -Infinity;

    if (current > lastTaken) {
      taken = recurse(length + 1, index + 1, current);
    }

    const notTaken = recurse(length, index + 1, lastTaken);
    
    return Math.max(taken, notTaken);
  }

  return recurse(0, 0, -Infinity);
};



const result = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(result);