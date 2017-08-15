function houseRobber(nums) {
  if (!nums.length) { return 0; }
  if (nums.length < 3) { return Math.max(...nums); }

  const dp = [nums[0]];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i] + dp[i - 2]);
  }

  console.log(dp);
  return dp[dp.length - 1];
}

houseRobber([2, 1, 1, 1]);
