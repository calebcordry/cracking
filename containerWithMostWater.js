/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
  let front = 0;
  let back = heights.length - 1;
  let max = 0;

  while (front < back) {
    const area = Math.min(heights[front], heights[back]) * (back - front);
    if (area > max) {
      max = area;
    }
    
    heights[front] > heights[back] ? back-- : front++;
  }

  return max;
};