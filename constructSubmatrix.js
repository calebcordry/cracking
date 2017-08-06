function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  for (let row of rowsToDelete) {
    matrix = [...matrix.slice(0, row), ...matrix.slice(row + 1)];
  }

  for (let col of columnsToDelete) {
    for(let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      matrix[i] = [...row.slice(0, col), ...row.slice(col + 1)];
    }
  }
}


const matrix = [
  [1, 0, 0, 2],
  [0, 5, 0, 1],
  [0, 0, 3, 5]
];


constructSubmatrix(matrix, [1], [0,2]);
