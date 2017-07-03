
// Brute Force
const staircaseB = stairs => {
  if (stairs === 0) { return 1; }
  if (stairs < 0) { return 0; }

  return staircaseB(stairs - 1) + staircaseB(stairs - 2) + staircaseB(stairs - 3);
};

// Memoize
const staircaseM = stairs => {
  const memo = [];
  
  const recurse = stairs => {
    if (stairs === 0) { return 1; }
    if (stairs < 0) { return 0; }

    if (memo[stairs] === undefined) {
      memo[stairs] = recurse(stairs - 1) + recurse(stairs - 2) + recurse(stairs - 3);
    }

    return memo[stairs];
  };

  return recurse(stairs);
};


// DP
const staircaseDP = target => {
  const dp = [1, 1, 2];

  for (let i = 3; i <= target;  i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[target];
};


// Space saver
const staircaseS = target => {
  const dp = [1, 1, 2];

  for (let i = 3; i <= target;  i++) {
    const result = dp[0] + dp[1] + dp[2];
    dp[0] = dp[1];
    dp[1] = dp[2];
    dp[2] = result;
  }

  return dp[2];
};

const input = 30;

console.time('brute');
const brute = staircaseB(input);
console.timeEnd('brute');

console.time('memo');
const memo = staircaseM(input);
console.timeEnd('memo');

console.time('dp');
const dp = staircaseDP(input);
console.timeEnd('dp');

console.time('space');
const space = staircaseS(input);
console.timeEnd('space');

console.log({ brute, memo, dp, space });