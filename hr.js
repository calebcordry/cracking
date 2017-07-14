
function maxDifference(a) {
  if (!a || !a.length) { return -1; }
  let min = a[0];
  let maxDiff = -1;
  
  for (let i = 1; i < a.length; i++) {
    if ((a[i] - min) > maxDiff) {
      maxDiff = a[i] - min;
    }

    if (a[i] < min) {
      min = a[i];
    }
  }

  return maxDiff;
}

