// Brute force
const fibonacci = (n) => {
  if (n === 1) { return 1; }
  if (n === 2) { return 2; }

  return fibonacci(n - 1) + fibonacci(n -2);
}


// DP
const fibonacci2 = n => {
  debugger;
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.time('brute');
// const res1 = fibonacci(45);
console.timeEnd('brute');

console.time('dp');
const res2 = fibonacci2(45);
console.timeEnd('dp');

console.log({res1, res2})