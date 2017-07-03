const robotPaths = (boardSize) => {
  const board = [];
  
  for (let i = 0; i < boardSize; i++) {
    board.push(new Array(boardSize));  
  }

  const count = (row = 0, column = 0) => {
    if (row > boardSize - 1 || row < 0 || column > boardSize - 1 
      || column < 0 || board[row][column]) { 
      return 0; 
    }

    if (row === boardSize - 1 && column === boardSize - 1) { return 1; }

    board[row][column] = true;

    const result = count(row + 1, column) + count(row - 1, column) 
      + count(row, column + 1) + count(row, column - 1)
    
    board[row][column] = false;

    return result;
  };

  return count(); 
};

const result = robotPaths(5);
console.log(result);