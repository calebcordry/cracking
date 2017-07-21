// BRUTE FORCE
const change = (target, coins) => {
  const helper = (index, runningTotal) => {
    if (index > coins.length - 1) { return 0; }
    if (runningTotal < 0) { return 0; }
    if (runningTotal === 0) { return 1; }

    const currentCoin = coins[index];
    
    return helper(index, runningTotal - currentCoin) + helper(index + 1, runningTotal);
  };

  return helper(0, target);
};

const changeMemo = (target, coins) => {
  const memo = {};
  
  const helper = (index, runningTotal) => {
    if (runningTotal === 0) { return 1; }
    if (index >= coins.length) { return 0; }

    const currentCoin = coins[index];
    const key = currentCoin + ';' + runningTotal;

    if (memo[key] !== undefined) {
      return memo[key];
    }

    let taken = 0;
    if(runningTotal - currentCoin >= 0) {
      taken = helper(index, runningTotal - currentCoin);
    }

    let notTaken = 0;
    if(runningTotal - currentCoin >= 0) {
      notTaken = helper(index + 1, runningTotal);
    }
    
    const result = taken + notTaken;
    memo[key] = result;
    return result;
  };

  return helper(0, target);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// DP solution
const coinChangeDP = (coins, target) => {
  const dp = new Array(target + 1);
  dp.fill(Infinity);
  dp[0] = 0;

  for(let i = 0;  i < coins.length; i++) {
    const coin = coins[i];
    for (let j = 1; j < dp.length; j++) {
      if (j >= coin) {
        const withCoin = 1 + dp[j - coin];
        dp[j] = Math.min(dp[j], withCoin);
      }
    }
  }

  return dp[target] === Infinity ? -1 : dp[target];
};

console.time('brute');
const result = change(500, [1, 2, 5, 9]);
console.timeEnd('brute');

console.time('memo');
const resultM = changeMemo(500, [1, 2, 5, 9]);
console.timeEnd('memo');

console.time('dp');
const resultDP = coinChangeDP(1000, [2, 5, 3, 6]);
console.timeEnd('dp');

console.log({ result, resultM, resultDP });