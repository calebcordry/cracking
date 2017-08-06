function findFirstSubstringOccurrence(s, x) {
  let xIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === x[xIndex]) {
      xIndex++;

      if (xIndex === x.length) { return i - x.length + 1; }
    }

    else {
      if (s[i] === x[0]) {
        xIndex = 1;
      }
      else {
        xIndex = 0;
      }
    }
  }

  return -1;
}


const result = findFirstSubstringOccurrence('sst', 'st');
console.log(result);
