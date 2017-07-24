 var getSum = function(a, b) {
  const abin = a.toString(2);
  const bbin = b.toString(2);
  const axorb = (a ^ b).toString(2);
  const aandb = (a & b).toString(2);
  const shift = (aandb << 1).toString(2);
  
  if (b === 0) {
    return a;  
  } 
  
  return getSum(a ^ b, (a & b) << 1);
};

const result = getSum(1,2);
console.log(result);

