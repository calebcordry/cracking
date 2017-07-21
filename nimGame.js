/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  const dp = [];
  dp[1] = true;
  dp[2] = true;
  dp[3] = true;
    
  for (let i = 4; i <= n; i++) {
    const cantWin = dp[n - 1] && dp[n - 2] && dp[n - 3];
    dp[i] = !cantWin;
  } 
    
  return dp[n];
};

const result = canWinNim(10);
console.log(result);