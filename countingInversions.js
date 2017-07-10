const count = array => {
  let counter = 0;
  const helper = (start, stop) => {
    if (start === stop) {
      return [array[start]];
    }

    const mid = Math.floor((stop - start) / 2 + start);
    const left = helper(start, mid);
    const right = helper(mid + 1, stop);
    return merge(left, right);
  };

  const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length || rightIndex < right.length) {
      const leftValue = left[leftIndex];
      const rightValue = right[rightIndex];

      if (leftValue <= rightValue || !rightValue) {
        result.push(leftValue);
        leftIndex++;
      } 

      else {
        if (leftValue) {
          counter += left.length - leftIndex;
        }
        result.push(rightValue);
        rightIndex++;
      }
    }

    return result;
  };

  const result = helper(0, array.length - 1);
  // console.log({ result, counter });
  return counter;
};

const result = count([2,4,1,3,67,12]);
// const result = count([2, 1, 3, 1, 2]);
console.log(result);