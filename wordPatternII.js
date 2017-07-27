/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str) {
  const map = {};
  const set = new Set();

  const helper = (patternIndex, strIndex) => {
    if (patternIndex === pattern.length && strIndex === str.length) {
      return true;
    }

    if (patternIndex === pattern.length || strIndex === str.length) {
      return false;
    }

    const patternChar = pattern[patternIndex];
    
    if (map.hasOwnProperty(patternChar)){
      const testString = map[patternChar];
      const slice = str.slice(strIndex, strIndex + testString.length);
      
      if (slice !== testString) {
        return false;
      }

      return helper(patternIndex + 1, strIndex + testString.length);
    }

    let found = false;
    for (let i = strIndex + 1; i <= str.length; i++) {
      const testString = str.slice(strIndex, i);
      
      if (set.has(testString)) {
        continue;
      }

      map[patternChar] = testString;
      set.add(testString);

      found = helper(patternIndex + 1, strIndex + testString.length);
      if (found) { return true; }

      delete map[patternChar];
      set.delete(testString);
    }

    return false;
  };

  return helper(0, 0);
};

// const pattern = 'abab';
// const str = 'redblueredblue'; // true.
const pattern = 'ab';
const str = 'aa'; // true.
// const pattern = 'aaaa';
// const str = 'asdasdasdasd'; // true.
// const pattern = 'aabb';
// const str = 'xyzabcxzyabc'; // false.

const result = wordPatternMatch(pattern, str);
console.log(result);

