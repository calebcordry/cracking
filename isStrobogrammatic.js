const pairs = {
  0 : '0',
  1 : '1',
  6 : '9',
  9 : '6',
  8 : '8',
};

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let front = 0;
  let back = num.length - 1;

  while (front <= back) {
    if (pairs[num[front]] !== num[back]) {
      return false;
    }

    front++;
    back--;
  }

  return true;
};

const result = isStrobogrammatic('88');
console.log(result);
