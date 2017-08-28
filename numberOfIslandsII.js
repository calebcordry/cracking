const deltas = [[0, 1], [1, 0], [-1, 0], [0, -1]];

const findIsland = (roots, id) => {
  while (id !== roots[id]) {
    id = roots[id];
  }
  return id;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  if (m <= 0 || n <= 0) { return []; }

  const result = [];
  let count = 0;

  const roots = new Array(m * n).fill(-1);

  for (let position of positions) {
    const [xPos, yPos] = position;
    let root = n * xPos + yPos;
    roots[root] = root;
    count++;

    for (let delta of deltas) {
      const [xDelta, yDelta] = delta;
      const x = xPos + xDelta;
      const y = yPos + yDelta;
      const neighborIndex = n * x + y;

      if (x < 0 || x >= m || y < 0 || y >= n || roots[neighborIndex] == -1) { continue; }

      const newRoot = findIsland(roots, neighborIndex);

      if (root !== newRoot) {
        roots[root] = newRoot;
        root = newRoot;
        count--;
      }
    }

    result.push(count);
  }

  return result;
};


const result = numIslands2(3, 3, [[0,0], [0,1], [1,2], [2,1], [0,2]]);
console.log(result);
