/**
 * @param {string} s
 * @return {string}
 */
var reverseString1 = function(s) {
  const split = s.split('');
  let front = 0;
  let back = s.length - 1;
  
  while (front < back) {
    const tmp  = split[front];
    split[front] = split[back];
    split[back] = tmp;
    front++;
    back--;
  }

  return split.join('');
};

var reverseString2 = function(s) {
  let result = '';
  
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  return result;  
};

const input = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello';
console.time('1');
const a = reverseString1(input);
console.timeEnd('1');

console.time('2');
const b = reverseString2(input);
console.timeEnd('2');

console.log({ a, b });