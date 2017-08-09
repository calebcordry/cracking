function quickSort(a, l, r) {

  if (l >= r) {
    return a;
  }

  var x = a[l]; // partition at left index
  var i = l;  // i === low index
  var j = r; // j = high index

  while (i <= j) {  // low index <= high index
    while (a[i] < x) {  // while element @ low < partition
      i++; // increase low index
    }
    while (a[j] > x) {  // while the el @ high > x
      j--;  // increase high
    }
    if (i <= j) {  // if low index < high
      var t = a[i];  //swap
      a[i] = a[j];
      a[j] = t;
      i++;  // increase low
      j--;  // decrease high
    }
  }

  quickSort(a, l, i - 1);
  quickSort(a, i, r);

  return a;
}


const result = quickSort([5, 2, 1, 7, 5, 3, 2, 3], 0, 7);
console.log(result);
