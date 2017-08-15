const reverse = (str, start, stop) => {
  while (start < stop) {
    const temp = str[start];
    str[start] = str[stop];
    str[stop] = temp;
    start++;
    stop--;
  }
};

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
  str.reverse();

  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ' ') {
      reverse(str, start, i - 1);
      start = i + 1;
    }
  }

  reverse(str, start, str.length - 1);
};

const s = 'the sky is blue'.split('');
console.log(s);
