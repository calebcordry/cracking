const iceCream = (money, array) => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const price = array[i];
    const remainder = money - price;
    
    if (map[remainder]) {
      return [map[remainder], i + 1];
    }

    map[price] = i + 1;
  }
};

const a = iceCream(4, [ 1, 4, 5, 3, 2 ]);
const b = iceCream(4, [ 2, 2, 4, 3 ]);
console.log({ a, b });