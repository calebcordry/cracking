// n = rows
// m = cols
const connected = (numRows, numCols, grid) => {
  let maxConnected = 0;

  const DFS = (row, col) => {
    if (row < 0 || row >= numRows) { return 0; } 
    if (col < 0 || col >= numCols) { return 0; }
    if (grid[row][col] === 0) { return 0; }
    
    grid[row][col] = 0;

    return 1 + 
      DFS(row + 1, col) +
      DFS(row - 1, col) +
      DFS(row, col + 1) +
      DFS(row, col - 1) +
      DFS(row + 1, col + 1) +
      DFS(row - 1, col - 1) +
      DFS(row + 1, col - 1) +
      DFS(row - 1, col + 1);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        const size = DFS(row, col);
        maxConnected = Math.max(maxConnected, size);
      }
    }
  }

  return maxConnected; 
};

const grid = [
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
];

const result = connected(5, 5, grid);
console.log(result);

