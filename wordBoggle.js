function wordBoggle(board, words) {
  let visited = [];
  for (let row of board) {
    visited.push(new Array(row.length).fill(false));
  }
    
  const rowMax = board.length - 1;
  const colMax = board[0].length - 1;

  const found = [];
  const foundSet = new Set();
    
  const dx = [-1, 0, 1];
  const dy = [-1, 0, 1];
    
  const helper = (row, col, word, wordIndex) => {
    if (foundSet.has(word)) {
      return;
    }

    if (wordIndex >= word.length) {
      found.push(word);
      foundSet.add(word);
    }
    
    for (let rowChange of dx) {
      for (let colChange of dy) {
        const newRow = row + rowChange;
        const newCol = col + colChange;
        if (newRow <= rowMax && newRow >= 0 && newCol <= colMax && newCol >=0 
                && !visited[newRow][newCol] && word[wordIndex] === board[newRow][newCol]) {
          visited[newRow][newCol] = true;
          helper(newRow, newCol, word, wordIndex + 1);
          visited[newRow][newCol] = false;
        }
      }
    }
        
        
  };
  
  for (let word of words) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === word[0]) {
          visited[i][j] = true;
          helper(i, j, word, 1);
          visited[i][j] = false;
        }
      }
    }
  }
  

  return found.sort();
}