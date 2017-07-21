var wordBreak = function(s, wordDict) {
  const dict = new Set(wordDict);
  const memo = new Array(s.length).fill(-1);

  const helper = start => {
    if (start === s.length) { return true; }

    if (memo[start] !== -1) { 
      return memo[start];
    }

    for (let end = start + 1; end <= s.length; end++) {
      const chunk = s.slice(start, end);
      if (dict.has(chunk) && helper(end)) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  };

  return helper(0);
};

const s = 'leetcode';
const dict = ['leet', 'code'];

const res = wordBreak(s, dict);
console.log(res);