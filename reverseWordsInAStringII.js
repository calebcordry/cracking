/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
  if (!str.length || str.length === 1) { 
    return str; 
  }

  str.reverse();
  
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ' ') {
      reverse(start, i - 1, str);
      start = i + 1;
    }
  }

  reverse(start, str.length - 1, str);
};

function reverse(start, stop, str) {
  while(start < stop) {
    const tmp = str[start];
    str[start] = str[stop];
    str[stop] = tmp;

    start++;
    stop--;
  }
}


let str = 'hi a  there'.split('');
const result = reverseWords(str);
console.log(str);