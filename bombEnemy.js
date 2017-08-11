/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (typeof grid[0] === 'string') {
    grid = grid.map(row => row.split(''));
  }

  let totals = [];
  for (let i = 0; i < grid.length; i++) {
    totals.push(new Array(grid[i].length).fill(0));
  }

  const helper = (row, col) => {
    if (grid[row][col] === 'W') {
      return;
    }

    if (grid[row][col] === 'E') {
      // go left
      for (let i = col - 1; i >= 0; i--) {
        if (grid[row][i] === 'W') { break; }
        if (grid[row][i] !== 'E') {
          totals[row][i] += 1;
        }
      }

      for (let i = col + 1; i < grid[0].length; i++) {
        if (grid[row][i] === 'W') { break; }
        if (grid[row][i] !== 'E') {
          totals[row][i] += 1;
        }
      }

      for (let i = row + 1; i < grid.length; i++) {
        if (grid[i][col] === 'W') { break; }
        if (grid[i][col] !== 'E') {
          totals[i][col] += 1;
        }
      }

      for (let i = row - 1; i >= 0; i--) {
        if (grid[i][col] === 'W') { break; }
        if (grid[i][col] !== 'E') {
          totals[i][col] += 1;
        }
      }
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      helper(row, col);
    }
  }

  console.log(totals);

  let max = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (totals[row][col] > max) {
        max = totals[row][col];
      }
    }
  }

  return max;
};




// For the given grid
//
const g = ["0E00","E0WE","0E00"];

const result = maxKilledEnemies(g);
console.log(result);

// return 3. (Placing a bomb at (1,1) kills 3 enemies)
