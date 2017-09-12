// function houseRobber(nums) {
//   if (!nums.length) { return 0; }
//   if (nums.length < 3) { return Math.max(...nums); }
//
//   const dp = [nums[0]];
//   dp[1] = Math.max(nums[0], nums[1]);
//
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i] + dp[i - 2]);
//   }
//
//   console.log(dp);
//   return dp[dp.length - 1];
// }
//
// houseRobber([2, 1, 1, 1]);

const swap = (array, a, b) => {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
};

const perms = stringArray => {
  let result = [];

  const helper = index => {
    if (index === stringArray.length) {
      result.push([...stringArray]);
    }

    for (let i = index; i < stringArray.length; i++) {
      swap(stringArray, index, i);
      helper(index + 1);
      swap(stringArray, index, i);
    }
  };

  helper(0);
  return result;
};


const s = 'caleb'.split('');
const result = perms(s);
console.log(result);
