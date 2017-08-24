/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  let totals = [];
  for (let i = 0; i < grid.length; i++) {
    totals.push(new Array(grid[i].length).fill(0));
  }

  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    let bombs = 0;
    let start = 0;

    for (let col = 0; col < grid[0].length; col++) {
      const value = grid[row][col];
      if (value === 'E') {
        bombs++;
      }

      if (value === 'W' || col === grid[0].length - 1) {
        // fill until here
        for (let i = start; i <= col; i++) {
          if (grid[row][i] !== 'W' && grid[row][i] !== 'E') {
            totals[row][i] = bombs;
            max = Math.max(totals[row][i], max);
          }
        }

        bombs = 0;
        start = col + 1;
      }
    }
  }

  console.log(totals);

  for (let col = 0; col < grid[0].length; col++) {
    let bombs = 0;
    let start = 0;

    for (let row = 0; row < grid.length; row++) {
      const value = grid[row][col];
      if (value === 'E') {
        bombs++;
      }

      if (value === 'W' || row === grid.length - 1) {
        // fill until here
        for (let i = start; i <= row; i++) {
          if (grid[i][col] !== 'W' && grid[i][col] !== 'E') {
            totals[i][col] += bombs;
            max = Math.max(totals[i][col], max);
          }
        }

        bombs = 0;
        start = row + 1;
      }
    }
  }

  console.log(totals);

  return max;
};

// For the given grid
//
const g = [
  '0E00',
  'E0WE',
  '0E00'
];

const result = maxKilledEnemies(g);
console.log(result);

// return 3. (Placing a bomb at (1,1) kills 3 enemies
