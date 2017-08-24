/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//   if (n === 0) { return 1; }
//
//   let result = x;
//
//   for (let i = 1; i < Math.abs(n); i++) {
//     result *= x;
//   }
//
//   if (n > 0) {
//     return result;
//   }
//   else {
//     return 1 / result;
//   }
// };

var myPow = function(x, n) {
  if (n == 0) return 1;

  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  if (n % 2) {
    return x * myPow(x, n - 1);
  }

  return myPow(x * x, n / 2);
};

const res = myPow(3, 6);
console.log(res);
