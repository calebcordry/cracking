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
    const cantWin = dp[i - 1] && dp[i - 2] && dp[i - 3];
    dp[i] = !cantWin;
  } 
    
  return dp[n];
};

var canWinNim = function(n) {
  if (n % 4 === 0) { return false; }
  return true;
};

const result = canWinNim(10);
console.log(result);