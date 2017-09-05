/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkylineRes = function(buildings) {
  const size = buildings.reduce((max, [, right, ,]) =>
    right > max ? right : max, 0);

  const heights = new Array(size + 2).fill(0);

  for (let building of buildings) {
    const [left, right, height] = building;

    for (let i = left; i <= right; i++) {
      heights[i] = Math.max(heights[i], height);
    }
  }

  const result = [];
  let prevHeight = 0;

  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    if (height > prevHeight) {
      result.push([i, height]);
      prevHeight = height;
    }

    if (height < prevHeight) {
      result.push([i - 1, height]);
      prevHeight = height;
    }
  }

  return result;
};

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const criticalPoints = [];
  for (let building of buildings) {
    const [left, right, height] = building;
    criticalPoints.push([left, height]);
    criticalPoints.push([right, height]);
  }

  for (let building of buildings) {
    const [left, right, height] = building;

    for (let point of criticalPoints) {
      const [pointX, pointY] = point;
      if (pointX > left && pointX < right) {
        point[1] = Math.max(pointY, height);
      }
    }
  }

  criticalPoints.sort((a, b) => a[0] - b[0]);
  criticalPoints.push([0, 0]);
  console.log(criticalPoints);

  let result = [];
  let prevHeight = 0;

  for (let i = 0; i < criticalPoints.length; i++) {
    const point = criticalPoints[i];
    const [x, y] = point;
    if (y > prevHeight) {
      result.push([x, y]);
      prevHeight = y;
    }

    if (y < prevHeight) {
      result.push([criticalPoints[i - 1][0], y]);
      prevHeight = y;
    }
  }

  return result;
};

const buildings = [
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8]
];

const result = getSkyline(buildings);
console.log(result)

// [0, 0, 10, 15, 15, 15, 15, 15, 12, 12, 12, 12, 12, 0, 0, 10, 10, 10, 10, 10, 10, 8, 8, 8, 8]
