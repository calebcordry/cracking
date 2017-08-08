function nextLarger(a) {
  for (let i = 0; i < a.length; i++) {
    const curr = a[i];
    let index = i + 1;
    while(index < a.length) {
      const check = a[index];
      if (check > curr) {
        a[i] = check;
        break;
      }
      index++;
    }
    if(index === a.length) {
      a[i] = -1;
    }
  }

  return a;
}

const result = nextLarger([6, 7, 3, 8]);
console.log(result);
