const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const numRows = grid.length;
  const numCols = grid[0].length;

  grid = grid.map(row => row.map(Number));

  let count = 0;

  const DFS = (row, col) => {
    if (row < 0 || col < 0 || row >= numRows || col >= numCols) {
      return;
    }

    if (grid[row][col] === 0) {
      return;
    }

    grid[row][col]--;

    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      DFS(row + rowDelta, col + colDelta);
    }
  };

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 1) {
        count++;
        DFS(row, col);
      }
    }
  }

  return count;
};

const result = numIslands(['11110', '11010', '11000', '00000']);
console.log(result);
