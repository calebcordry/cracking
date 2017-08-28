/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) { return false; }
  if (x !== 0 && x % 10 === 0) { return false; }

  let check = 0;
  while (x > check) {
    check = check * 10 + x % 10;
    x /= 10;
  }

  return x === check || x === check / 10;
};

const result = isPalindrome(20202);
console.log(result);
