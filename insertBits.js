function insertBits(n, a, b, k) {
  const n2 = n.toString(2);
  const k2 = k.toString(2);
  let result = '';

  for (let i = 0; i < a; i++) {
    const digit = n2[n2.length - 1 - i] || 0;
    result = digit + result;
  }

  let kIndex = 0;
  for (let i = a; i <= b; i++) {
    const digit = k2[k2.length - 1 - kIndex] || 0;
    result = digit + result;
    kIndex++;
  }

  for (let i = b + 1; i <= n2.length; i++) {
    const digit = n2[n2.length - 1 - i] || 0;
    result = digit + result;
  }

  return parseInt(result, 2);
}

const n = 1024;
const a = 1;
const b = 6;
const k = 17;
const result = insertBits(n, a, b, k);
console.log(result);
