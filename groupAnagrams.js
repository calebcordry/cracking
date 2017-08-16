/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};

  for (let str of strs) {
    const key = str.split('').sort((a, b) => a > b);

    if(map.hasOwnProperty(key)) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }

  return Object.values(map);
};

const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(res);
