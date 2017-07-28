/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const result = [];
  
  const helper = (n, start, path) => {
    if (n <= 1) {
      if (path.length > 1) {
        result.push(path);
      }
    }

    for (let i = start; i <= n; i++) {
      if (n % i === 0) {
        helper(n / i, i, path.concat(i));
      }
    }
  };

  helper(n, 2, []);
  return result;
};

const result = getFactors(20);
console.log(result);