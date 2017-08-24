/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let last = digits.length - 1;
  let carry = 1;

  while (carry && last >= 0) {
    let sum = digits[last] + carry;

    if (sum === 10) {
      sum = 0;
      carry = 1;
    }
    else {
      carry = 0;
    }

    digits[last] = sum;
    last--;
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};

const res = plusOne([9]);
console.log(res);
