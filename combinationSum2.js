var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const helper = (index, total, current) => {
    if (total < 0) { return; }
    
    if (total === 0) {
      result.push(current);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] == candidates[i-1]) { continue; }
      helper(i + 1, total - candidates[i], current.concat(candidates[i]));
    }
  };

  helper(0, target, []);

  return result;
};

const res = combinationSum2([10, 1, 2, 2, 7, 6, 1, 5], 10);
console.log(res);
