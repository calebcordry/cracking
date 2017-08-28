const deltas = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
];

const sumNeighbors = (board, row, col) => {
  let sum = 0;

  for (let delta of deltas) {
    const [rowD, colD] = delta;
    const newRow = row + rowD;
    const newCol = col + colD;
    if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
      sum += board[row + rowD][col + colD];
    }
  }

  return sum;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const clone = board.map(row => [...row]);

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const neighbors = sumNeighbors(clone, row, col);
      const value = clone[row][col];

      // under-population
      if (value && neighbors < 2) {
        board[row][col] = 0;
      }

      // live on
      else if (value && (neighbors === 3 || neighbors === 2)) {
        board[row][col] = 1;
      }

      // over-population
      else if (value && neighbors > 3) {
        board[row][col] = 0;
      }

      // reproduction
      else if (!value && neighbors === 3) {
        board[row][col] = 1;
      }

      else {
        board[row][col] = 0;
      }
    }
  }
};

const board = [[1]];
gameOfLife(board);
console.log(board);
