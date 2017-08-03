/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  if (input.indexOf('.') === -1) {
    return 0;
  }
    
  const parsed = input.split('\n');
  let maxLen = 0;
  let pathLength = [0];

  for (let line of parsed) {
    const name = line.trimLeft();
    const depth = line.lastIndexOf('\t') + 1;

    const length = name.length + pathLength[]
  }
    
  return maxLen;
};

// const name = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
const name = 'dir\n        file.txt';
const result = lengthLongestPath(name);
console.log(result);
