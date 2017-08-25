const fillDistances = (distances, startRow, startCol, grid, buildings) => {
  const maxRow = distances.length;
  const maxCol = distances[0].length;

  const visited = [];
  for (let i = 0; i < distances.length; i++) {
    visited.push(new Array(distances[i].length).fill(false));
  }

  let distance = 0;
  let q = [[startRow, startCol], null];
  visited[startRow][startCol] = true;

  while (q.length) {
    const current = q.shift();

    if (!current) {
      distance++;
      if (q.length) {
        q.push(null);
      }
    }

    else {
      const [row, col] = current;
      distances[row][col] += distance;

      const deltas = [-1, 1];
      for (let delta of deltas) {
        let newRow = row + delta;
        let newCol = col + delta;

        if (newCol >= 0 && newCol < maxCol && !visited[row][newCol] && grid[row][newCol] === 0) {
          visited[row][newCol] = true;
          buildings[row][newCol] += 1;
          q.push([row, newCol]);
        }

        if (newRow >= 0 && newRow < maxRow && !visited[newRow][col] && grid[newRow][col] === 0) {
          visited[newRow][col] = true;
          buildings[newRow][col] += 1;
          q.push([newRow, col]);
        }
      }
    }
  }
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  const distances = [];
  for (let i = 0; i < grid.length; i++) {
    distances.push(new Array(grid[i].length).fill(0));
  }

  const buildings = [];
  for (let i = 0; i < grid.length; i++) {
    buildings.push(new Array(grid[i].length).fill(0));
  }

  let numBuildings = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const value = grid[row][col];

      if (value === 1) {
        numBuildings++;
        distances[row][col] = Infinity;
        fillDistances(distances, row, col, grid, buildings);
      }

      if (value === 2) {
        distances[row][col] = Infinity;
      }
    }
  }

  console.log(distances);

  let min = Infinity;

  for (let row = 0; row < distances.length; row++) {
    for (let col = 0; col < distances[0].length; col++) {
      const value = distances[row][col];
      if (buildings[row][col] === numBuildings) {
        min = Math.min(min, value);
      }
    }
  }

  return min === Infinity ? -1 : min;
};


const grid = [
  [1, 0, 2, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

const result = shortestDistance(grid);
console.log(result);
