function climbingStaircase(n, k) {
  const results = [];
  const choices = [];

  for (let i = 1; i <= k; i++) {
    choices.push(i);
  }

  const helper = (path, stairsLeft) => {
    if (stairsLeft < 0) { return; }
    if (stairsLeft === 0) { results.push(path); }

    for(let choice of choices) {
      helper(path.concat(choice), stairsLeft - choice);
    }
  };

  helper([], n);
  return results;
}

const result = climbingStaircase(4, 2);
console.log(result);
