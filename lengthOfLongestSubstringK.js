/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (!s.length || k < 1) { return 0; }
  if (k > s.length) { return s.length; }
    
  let maxLength = 0;
  let front = 0;
  let back = 1;
  const map = { [s[0]]: 1 };
  let unique = 1;
    
  while (back < s.length) {
    const nextChar = s[back];
        
    // if new char increment unique and put in char map
    if (!map[nextChar]) {
      unique++;
      map[nextChar] = 1;
    }
        
    // if not unique just increment the count in map
    else {
      map[nextChar] = map[nextChar] + 1;
    }
        
    // if we are over unique limit
    //  move the front pointer until we are under
    while (unique > k) {
      const char = s[front];
      if (map[char] === 1) {
        delete map[char];
        unique--;
      }
      else {
        map[char]  = map[char] - 1;
      }
      front++;
    }
        
    maxLength = Math.max(maxLength, back - front + 1);
    back++;
  }
  
  return maxLength;
};

const res =  lengthOfLongestSubstringKDistinct('aa', 1);
console.log(res);