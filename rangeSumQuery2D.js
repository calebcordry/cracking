/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
  this.rowSums = [];
  this.colSums = [];
    
  for (let row of matrix) {
    this.rowSums.push(row.reduce((sum, item) => sum + item));
  }
    
  for(let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }
    this.colSums.push(colSum);
  }
    
    
  this.total = this.rowSums.reduce((s, i) => s + i);
  // console.log({r: this.rowSums, c: this.colSums });
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  const delta = val - this.matrix[row][col];
  this.matrix[row][col] = val;
  this.rowSums[row] += delta;
  this.colSums[col] += delta;
  this.total += delta;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = this.total * 2;
  const rowSet = new Set();
  const colSet = new Set();
    
  for (let i = row1; i <= row2; i++) {
    rowSet.add(i);
  }
    
  for (let i = col1; i <= col2; i++) {
    colSet.add(i);
  }
    
  const notRow = this.rowSums.reduce((sum, item, i) => rowSet.has(i) ? sum : sum + item);
  const notCol = this.colSums.reduce((sum, item, i) => colSet.has(i) ? sum : sum + item);
    
  return sum - notRow - notCol;
};


const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

const obj = new NumMatrix(matrix);
obj.sumRegion(2, 1, 4, 3);