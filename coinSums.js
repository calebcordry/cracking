// Brute force
const coinSums1 = (coins, target) => {
  const recurse = (index = 0, subtotal = 0) => {

    if (subtotal === target) { return 1; }
    if (subtotal > target || index > coins.length - 1) { return 0; }
    
    return recurse(index, subtotal + coins[index]) + recurse(index + 1, subtotal);
  };

  return recurse();
};

// DP solution
const coinSums = (coins, target) => {
  const dp = new Array(target + 1);
  dp.fill(0);
  dp[0] = 1;

  for(let i = 0;  i < coins.length; i++) {
    for (let j = 1; j < dp.length; j++) {
      if(coins[i] <= j) {
        dp[j] =  dp[j] + dp[j - coins[i]];
      }
    }
  }

  return dp[dp.length - 1];
};

console.time('brute');
const result1 = coinSums1([1,2,5,10], 10);
console.timeEnd('brute');

console.time('dp');
const result = coinSums([1,2,5,10], 10);
console.timeEnd('dp');

console.log({ result, result1 });