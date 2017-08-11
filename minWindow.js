/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let map = {};
  let count = t.length;
  let min = Infinity;
  let minIndex = [];
  let front = 0;
  let back = 0;

  for (let char of t) {
    map[char] = map[char] + 1 || 1;
  }

  while(back < s.length) {
    if (map[s[back]] > 0) {
      count--;
    }
    map[s[back]]--;

    while (count === 0) {
      const diff = back - front;

      if (diff < min) {
        min = diff;
        minIndex = [front, back];
      }

      if (map[s[front]] === 0) {
        count++;
      }
      map[s[front]]++;
      front++;
    }

    back++;
  }

  return min === Infinity ? '' : s.slice(minIndex[0], minIndex[1] + 1);
};

const S = 'ADOBECODEBANC';
const T = 'ABC';
const res = minWindow(S, T);
console.log(res);
