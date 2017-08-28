/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let count = 0;
  let front = 0;
  let back = height.length - 1;
  let minSoFar = 0;

  while (front < back) {
    const min = Math.min(height[front], height[back]);

    if (min > minSoFar) {
      minSoFar = min;
    }

    if (height[front] < minSoFar) {
      count += minSoFar - height[front];
    }

    else if (height[back] < minSoFar) {
      count += minSoFar - height[back];
    }

    if(height[front] < height[back]) {
      front++;
    }

    else {
      back--;
    }
  }

  return count;
};

const result = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(result);
