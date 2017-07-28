/**
 * @param {character[][]} board
 * @return {boolean}
 */

const checkSection = (board, rowStart, rowStop, colStart, colStop) => {
  const seen = new Set();

  for (let i = rowStart; i <= rowStop; i++) {
    for (let j = colStart; j <= colStop; j++) {
      const value = board[i][j];
      if (value === '.') {
        continue;
      }
      
      if(seen.has(value)) {
        return false;
      }
      
      seen.add(value);
    }
  }

  return true;
};

const checkRows = board => {
  for (let i = 0; i < 9; i++) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value !== '.' && seen.has(value)) {
        return false;
      }
      seen.add(value);
    }
  }
  return true;
};

const checkCols = board => {
  for (let i = 0; i < 9; i++) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[j][i];
      if (value !== '.' && seen.has(value)) {
        return false;
      }
      seen.add(value);
    }
  }
  return true;
};


var isValidSudoku = function(board) {
  // check all quadrants
  const coordinatePairs = [[0, 2], [3, 5], [6, 8]];
  for (let i = 0; i < coordinatePairs.length; i++) {
    const [rowStart, rowStop] = coordinatePairs[i];
    for (let j = 0; j < coordinatePairs.length; j++) {
      const [colStart, colStop] = coordinatePairs[j];
      const check = checkSection(board, rowStart, rowStop, colStart, colStop);
      if (!check) { return false; }
    }
  }

  return checkRows(board) && checkCols(board);
};

const board = [ 
  // 0    1    2    3    4    5    6    7    8
  [ '.', '8', '7', '6', '5', '4', '3', '2', '1' ], // 0
  [ '2', '.', '.', '.', '.', '.', '.', '.', '.' ], // 1
  [ '3', '.', '.', '.', '.', '.', '.', '.', '.' ], // 2
  [ '4', '.', '.', '.', '.', '.', '.', '.', '.' ], // 3
  [ '5', '.', '.', '.', '.', '.', '.', '.', '.' ], // 4
  [ '6', '.', '.', '.', '.', '.', '.', '.', '.' ], // 5 
  [ '7', '.', '.', '.', '.', '.', '.', '.', '.' ], // 6
  [ '8', '.', '.', '.', '.', '.', '.', '.', '.' ], // 7 
  [ '9', '.', '.', '.', '.', '.', '.', '.', '.' ]  // 8
];

const result = isValidSudoku(board);
console.log(result);

