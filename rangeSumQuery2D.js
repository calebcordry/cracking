/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return;
  }

  this.matrix = matrix;
  this.numRows = matrix.length;
  this.numCols = matrix[0].length;

  this.colSums = [];
  this.colSums.push(new Array(matrix[0].length).fill(0));

  for (let row = 1; row <= this.numRows; row++) {
    this.colSums.push([]);
    for (let col = 0; col < this.numCols; col++) {
      this.colSums[row][col] = this.colSums[row - 1][col] + matrix[row - 1][col];
    }
  }

  debugger;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  this.matrix[row][col] = val;
  for (let i = row + 1; i <= this.numRows; i++) {
    this.colSums[i][col] = this.colSums[i - 1][col] + this.matrix[i - 1][col];
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;

  for (let col = col1; col <= col2; col++) {
    sum += this.colSums[row2 + 1][col] - this.colSums[row1][col];
  }

  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

const nm = new NumMatrix(matrix);
console.log(nm.sumRegion(2, 1, 4, 3));
nm.update(3, 2, 2);
console.log(nm.sumRegion(2, 1, 4, 3));
