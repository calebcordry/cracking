function arrayMaxConsecutiveSum2(inputArray) {
  let maxHere = 0;
  let maxSoFar = -Infinity;

  for (let el of inputArray) {
    maxHere += el;

    if (maxSoFar < maxHere) {
      maxSoFar = maxHere;
    }

    if (maxHere < 0) {
      maxHere = 0;
    }
  }

  return maxSoFar;
}

const res = arrayMaxConsecutiveSum2([-3, -2, -1, -4]);
console.log(res);
