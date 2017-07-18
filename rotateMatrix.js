const rotate = matrix => {
  const size = matrix.length;
  for (let layer = 0; layer < size / 2; layer++) {
    const last = size - 1 - layer;
    for (let i = 0; i < last - layer; i ++) {
      const temp = matrix[layer][layer + i];
      // top left
      matrix[layer][layer + i] = matrix[last - i][layer];
      // bottom left
      matrix[last - i][layer] = matrix[last][last - i];
      // bottom right
      matrix[last][last - i] = matrix[layer + i][last];
      // top right
      matrix[layer + i][last] = temp;
    }
  }

  return matrix;
};

const matrix = [
  [8, 4, 5, 8, 6, 5, 4], 
  [9, 8, 6, 1, 4, 2, 0], 
  [6, 7, 2, 1, 7, 8, 7], 
  [1, 5, 1, 3, 0, 2, 4], 
  [4, 7, 3, 7, 0, 4, 9], 
  [1, 1, 1, 9, 7, 7, 2], 
  [2, 9, 7, 4, 3, 3, 7],
];

const res = rotate(matrix);
console.log(res);

