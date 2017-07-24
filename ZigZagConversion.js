/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s) { return s; }
    
  const storage = [];
  for (let i = 0; i < numRows; i++) {
    storage.push('');
  }
    
  let index = 0;

  while (index < s.length) {
    let row = 0;
    while(row < numRows && index < s.length) {
      storage[row] += s[index];
      index++;
      row++;
    }
   
    row = numRows - 2;
    while(row > 0 && index < s.length) {
      storage[row] += s[index];
      index++;
      row--;
    }
  }
    
  return storage.reduce((a, b) => a + b);
};

const a = convert('ABCD', 3);
console.log(a);