const bubbleSort = array => {
  let swaps = 0;
  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
        swaps++;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${array[0]}`);
  console.log(`Last Element: ${array[array.length - 1]}`);
};

bubbleSort([2,1,4,3]);