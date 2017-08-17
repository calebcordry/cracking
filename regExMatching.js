/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s === p) { return true; }

  const helper = (sIndex, pIndex) => {
    if (sIndex === s.length && pIndex === p.length) { return true; }
    if (sIndex === s.length || pIndex === p.length) { return false; }

    const char = s[sIndex];
    const symbol = p[pIndex];

    if (char === symbol || symbol === '.') {
      return helper(sIndex + 1, pIndex + 1);
    }

    if (symbol === '*') {
      if (char === p[pIndex - 1] || p[pIndex - 1] === '.') {
        return helper(sIndex + 1, pIndex + 1) ||
        helper(sIndex + 1, pIndex) ||
        helper(sIndex, pIndex + 1) ||
        helper(sIndex - 2, pIndex + 1);
      }

      if (char !== p[pIndex - 1]) {
        return helper(sIndex, pIndex + 1);
      }

    }

    if (p[pIndex + 1] === '*') {
      return helper(sIndex, pIndex + 2);
    }

    return false;
  };

  return helper(0, 0);
};


// console.log(isMatch('aa','a'));  // false
// console.log(isMatch('aa','aa'));  // true
// console.log(isMatch('aaa','aa'));  // false
// console.log(isMatch('aa', 'a*'));  // true
// console.log(isMatch('a', 'ab*'));  // true
// console.log(isMatch('aa', '.*'));  // true
// console.log(isMatch('ab', '.*'));  // true
// console.log(isMatch('aab', 'c*a*b'));  // true
// console.log(isMatch('ab', '.*c'));  // true
