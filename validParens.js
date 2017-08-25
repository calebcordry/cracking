const map = {
  '}' : '{',
  ']' : '[',
  ')' : '(',
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const storage = [];

  for (let char of s) {
    if (char === '(' || char === '{' || char ===  '[') {
      storage.push(char);
    }

    else if (char === '}' || char === ')' || char ===  ']') {
      const last = storage.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }

  return !storage.length;
};
