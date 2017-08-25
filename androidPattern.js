const skip = [
  //  1  2  3  4  5  6  7  8  9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // 0
  [0, 0, 0, 2, 0, 0, 0, 4, 0, 5],  // 1
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 0],  // 2
  [0, 2, 0, 0, 0, 0, 0, 5, 0, 6],  // 3
  [0, 0, 0, 0, 0, 0, 5, 0, 0, 0],  // 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // 5
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],  // 6
  [0, 4, 0, 5, 0, 0, 0, 0, 0, 8],  // 7
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],  // 8
  [0, 5, 0, 6, 0, 0, 0, 8, 0, 0],  // 9
];

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  const visited = new Set();

  const helper = current => {

    if (visited.size > n) { return 0; }

    let sum = 0;

    if (visited.size >= m) { sum ++; }

    for (let i = 1; i <= 9; i++) {
      const canGo = skip[current][i] === 0 || visited.has(skip[current][i]);
      if (!visited.has(i) && canGo) {
        visited.add(i);
        sum += helper(i);
        visited.delete(i);
      }
    }

    return sum;
  };

  let total = 0;
  // for (let i = 1; i <= 9; i++) {
  //   visited.add(i);
  //   total += helper(i);
  //   visited.delete(i);
  // }

  visited.add(1);
  total += helper(1) * 4;
  visited.delete(1);

  visited.add(2);
  total += helper(2) * 4;
  visited.delete(2);

  visited.add(5);
  total += helper(5);
  visited.delete(5);

  return total;
};

const result = numberOfPatterns(1, 1);
console.log(result);
