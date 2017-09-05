/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!intervals.length) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  let start = intervals[0][0];
  let maxSoFar = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] > maxSoFar) {
      result.push([start, maxSoFar]);
      start = interval[0];
      maxSoFar = interval[1];
    }
    else {
      maxSoFar = Math.max(maxSoFar, interval[1]);
    }
  }

  result.push([start, maxSoFar]);

  return result;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const result = merge(intervals);
console.log(result);
