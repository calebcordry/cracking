function higherVersion2(ver1, ver2) {
  const one = ver1.split('.').map(el => Number('.' + el));
  const two = ver2.split('.').map(el => Number('.' + el));

  for (let i = 0; i < one.length; i++) {
    if (one[i] > two[i]) {
      return 1;
    }

    if (one[i] < two[i]) {
      return -1;
    }
  }

  return 0;
}
