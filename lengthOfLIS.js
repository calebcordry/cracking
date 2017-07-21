/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force
const lengthOfLIS = nums => {
  if (!nums.length) { return; }

  const helper = (index, lastTaken) => {
    if (index === nums.length) {
      return 0;
    }

    const currentNum = nums[index];

    let taken = 0;
    if (currentNum > lastTaken) {
      taken = 1 + helper(index + 1, currentNum);
    }
    
    const notTaken = helper(index + 1, lastTaken);

    return Math.max(taken, notTaken);
  };

  return helper(0, -Infinity);
};

// Memo
const lengthOfLISMemo = nums => {
  if (!nums.length) { return 0; }
  const memo = [];
  for (let i = 0; i < nums.length; i++) {
    memo.push(new Array(nums.length).fill(-1));
  }

  const helper = (index, lastTakenIndex) => {
    if (index === nums.length) {
      return 0;
    }

    const currentNum = nums[index];
    if (lastTakenIndex !== -1 && memo[index][lastTakenIndex] !== -1) {
      return memo[index][lastTakenIndex];
    }

    let taken = 0;
    if (currentNum > nums[lastTakenIndex] || lastTakenIndex === -1) {
      taken = 1 + helper(index + 1, index);
    }
    
    const notTaken = helper(index + 1, lastTakenIndex);

    const result = Math.max(taken, notTaken);
    memo[index][lastTakenIndex] = result;
    return result;
  };

  return helper(0, -1);
};

const lengthOfLISDP = nums => {
  if (!nums.length) { return 0; }
  
  let globalMax = 0;
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++) {
    let maxVal = 1;
    const curr = nums[i];
    for(let j = 0; j < i; j++) {
      const check = nums[j];
      if (check < curr) {
        maxVal = Math.max(maxVal, dp[j] + 1);
      }
    }

    dp[i] = maxVal;
    globalMax = Math.max(globalMax, maxVal);
  }

  return globalMax;
};





const input = [16, 21, 4, 27, 1, 19, 14, 16, 21, 13, 24, 30, 15, 25, 20, 30, 9, 3, 5, 3, 22, 2, 27, 15, 17, 9, 22, 1, 4, 17, 22, 5, 22, 6, 4, 6, 29, 9, 26, 27, 18, 15, 29, 26, 30, 8, 21, 17, 4, 17, 16, 28, 26, 0, 1, 14, 14, 1, 11, 18, 13, 5, 21, 28, 16, 12, 16, 9, 27, 23, 13, 26, 7, 9, 1, 15, 20, 22, 5, 24, 26, 15, 14, 1, 25, 0, 9, 24, 25, 24, 21, 17, 21, 12, 9, 18, 13, 28, 25, 15, 15, 29, 22, 22, 20, 26, 5, 18, 4, 4, 4, 5, 3, 15, 20, 26, 0, 25, 11, 9, 17, 28, 1, 17, 26, 8, 28, 16, 3, 1, 7, 11, 17, 21, 25, 23, 15, 8, 26, 13, 0, 7, 3, 13, 20, 14, 15, 19, 30, 9, 16, 12, 21, 10, 19, 30, 23, 20, 22, 16, 6, 7, 26, 2, 26, 10, 7, 18, 3, 29, 10, 30, 29, 23, 27, 4, 17, 20, 8, 24, 30, 6, 21, 16, 30, 2, 15, 13, 0, 26, 18, 24, 16, 15, 30, 8, 20, 27, 21, 17, 6, 13, 12, 28, 5, 25, 14, 19, 23, 13, 25, 4, 23, 6, 4, 29, 13, 5, 22, 25, 13, 9, 10, 24, 19, 8, 21, 15, 10, 25, 25, 23, 16, 28, 6, 13, 5, 24, 8, 13, 8, 27, 18, 21, 30, 27, 26, 16, 3, 11, 24, 27, 15, 30, 5, 23, 24, 7, 11, 17, 26, 22, 25, 16, 7, 24, 24, 25, 7, 20, 30, 11, 25, 13, 5, 14, 30, 14, 4, 29, 22, 19, 1, 9, 27, 25, 3, 29, 4, 2, 14, 17, 9, 5, 18, 15, 17, 1, 8, 8, 5, 14, 24, 13, 17, 3, 7, 10, 11, 20, 0, 28, 20, 2, 22, 28, 13, 3, 28, 13, 10, 16, 8, 13, 1, 21, 26, 5, 17, 7, 16, 14, 17, 2, 5, 11, 18, 28, 30, 1, 15, 18, 2, 4, 24, 18, 29, 5, 2, 6, 17, 17, 17, 9, 22, 8, 2, 4, 23, 19, 10, 20, 0, 13, 28, 3, 6, 29, 0, 14, 11, 1, 9, 30, 25, 11, 8, 2, 5, 2, 13, 4, 15, 23, 24, 11, 7, 22, 2, 22, 23, 12, 26, 23, 15, 15, 1, 19, 9, 27, 30, 3, 20, 24, 21, 25, 15, 6, 18, 5, 1, 24, 14, 16, 3, 23, 13, 7, 3, 28, 9, 24, 9, 28, 25, 1, 28, 2, 11, 8, 17, 16, 20, 17, 25, 13, 27, 10, 26, 10, 1, 30, 19, 5, 5, 6, 14, 21, 6, 22, 10, 10, 17, 24, 9, 9, 0, 3, 19, 15, 9, 27, 16, 20, 17, 4, 10, 12, 23, 3, 20, 8, 4, 25, 5, 7, 9, 0, 5, 2, 21, 17, 9, 14, 6, 26, 0, 1, 20, 16, 16, 10, 22, 11, 21, 30, 12, 14, 2, 29]
// const input = [1,3,6,7,9,4,10,5,6]

console.time('brute');
// const b = lengthOfLIS(input);
const b = null;
console.timeEnd('brute');

console.time('memo');
const m = lengthOfLISMemo(input);
console.timeEnd('memo');

console.time('dp');
// const dp = null;
const dp = lengthOfLISDP(input);
console.timeEnd('dp');

console.log({ b, m, dp });