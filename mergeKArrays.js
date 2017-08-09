function mergeKArrays(arrays) {
  const firstUnused = [];
  const result = [];
  let n = 0;

  for (let i = 0; i < arrays.length; i++) {
    firstUnused.push(0);
    n += arrays[i].length;
  }

  for (let i = 0; i < n; i++) {
    var minIndex = -1,
      minValue = 0;
    for (var j = 0; j < arrays.length; j++) {
      if (firstUnused[j] < arrays[j].length) {
        if (arrays[j][firstUnused[j]] < minIndex || minValue === 0) {
          minIndex = j;
          minValue = arrays[j][firstUnused[j]];
        }
      }
    }
    result.push(minValue);
    firstUnused[minIndex]++;
  }

  return result;
}

const arrays = [[1, 3, 5], [2, 3], [2, 3, 5, 8]];
const res = mergeKArrays(arrays);
console.log(res);
