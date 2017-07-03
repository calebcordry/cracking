const make = (stringOne, stringTwo) => {
  const map = {};

  for(let i = 0; i < stringOne.length; i++) {
    map[stringOne[i]] = map[stringOne[i]] + 1 || 1;
  }

  for(let i = 0; i < stringTwo.length; i++) {
    map[stringTwo[i]] = map[stringTwo[i]] ?  map[stringTwo[i]] - 1 :  -1;
  }

  const keys = Object.keys(map);
  let count = 0;
  for (let i = 0; i < keys.length; i++) {
    count += Math.abs(map[keys[i]]);
  }

  return count;
};

const result = make('abc', 'cdeeeee');
console.log(result);