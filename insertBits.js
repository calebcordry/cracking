function insertBits(n, a, b, k) {
  const n2 = n.toString(2).padStart(b + 1, 0).split('');
  const k2 = k.toString(2).padStart(b + 1, 0).split('');

  let result = n2.slice(-a).reverse();

  result = [...result, ...k2.reverse().slice(0, b - a + 1)];
  result = [...result, ...n2.reverse().slice(b + 1)];

  return parseInt(result.reverse().join(''), 2);
}

const n = 15;
const a = 0;
const b = 0;
const k = 1;
const result = insertBits(n, a, b, k);
console.log(result);
