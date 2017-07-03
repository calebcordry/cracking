const houseRobber = houses => {

  const recurse = (index, total, lastTakenIndex) => {
    if (index > houses.length - 1) { return total; }

    const house = houses[index];
    let taken = -Infinity;

    if (index - lastTakenIndex > 1) {
      taken = recurse(index + 1, total + house, index);
    }

    const notTaken = recurse(index + 1, total, lastTakenIndex);

    return Math.max(taken, notTaken);
  };

  return recurse(0, 0, -Infinity);
};

const input = [1, 2, 10, 2, 1, 2, 1, 2];
const res = houseRobber(input);
console.log(res);