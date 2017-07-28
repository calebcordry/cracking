/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const result = [];
  const map = {};
  
  for (let string of strings) {
    if (string.length === 1) {
      map['ones'] = map['ones'] || [];
      map['ones'].push(string);
    }

    else {
      let key = '';
      for (let i = 0; i < string.length - 1; i++) {
        let diff = (string.charCodeAt(i) - string.charCodeAt(i + 1));
        if (diff < 0) {
          diff += 26;
        }
        key += diff + ',';
      }
      map[key] = map[key] || [];
      map[key].push(string);
    }
  }

  for (let val of Object.values(map)) {
    result.push(val);
  }

  return result;
};

const input = ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'];
const result = groupStrings(input);
console.log(result);

// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]

// 952