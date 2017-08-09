function sumInRange(nums, queries) {
  const sums = [];
  let sum = 0;

  for (let num of nums) {
    sum += num;
    sums.push(sum);
  }

  sum = 0;
  for (let q of queries) {
    const [start, stop] = q;
    const subtract = sums[start - 1] || 0;
    sum += sums[stop] - subtract;
  }

  const num = Math.pow(10, 9) + 7;
  return (sum % num + num) % num;
}

const nums = [3, 0, -2, 6, -3, 2];
const queries = [[0, 2], [2, 5], [0, 5]];
const res = sumInRange(nums, queries);
console.log(res);
