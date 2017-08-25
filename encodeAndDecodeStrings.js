/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let builder = '';
  for (let string of strs) {
    builder += string.length + '/' + string;
  }

  return builder;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  let result = [];

  let index = 0;
  while (index < s.length) {
    const start = s.indexOf('/', index);
    const length = +s.slice(index, start);
    result.push(s.slice(start + 1, start + length + 1));
    index = start + length + 1;
  }

  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const e = encode(['hey', 'there']);
const res = decode(e);
console.log(res);
