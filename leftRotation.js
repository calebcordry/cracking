const rotateFor = (rotation, array) => { 
  const result = [];
  for (let i = rotation; i < array.length; i++ ) {
    result.push(array[i]);
  }

  for (let i = 0; i < rotation; i++ ) {
    result.push(array[i]);
  }

  return result.join(' ');
};

const rotateSpread = (rotation, array) => {
  return [...array.slice(rotation), ...array.slice(0, rotation)].join(' ');
};

const r = 4;
const array = [5, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 17];

console.time('for');
const forloop = rotateFor(r, array);
console.timeEnd('for');

console.time('spread');
const spread = rotateSpread(r, array);
console.timeEnd('spread');

console.log({ forloop, spread });