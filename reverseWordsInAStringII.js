/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
  if (!str.length || str.length === 1) { 
    return str; 
  }

  const words = str.split(' ');
  let first = 0;
  let last = words.length - 1;

  while (first < last) {
    const temp = words[first];
    words[first] = words[last];
    words[last] = temp;

    first++;
    last--;
  }

  return words.join(' ');
};

const result = reverseWords('a b');
console.log(result);