/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let maxLen = -Infinity;
  let stop = 0;

  for (let str of strs) {
    if (str.length > maxLen) {
      maxLen = str.length;
    }
  }

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return strs[j].slice(0, stop);
      }
    }
    stop++;
  }

  return strs[0].slice(0, stop);
};
