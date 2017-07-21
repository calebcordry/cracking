/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) { return false; }

  const memo = {};

  const helper = (index1, index2, index3) => {
    if (index3 === s3.length) {
      return true;
    }

    if (s1[index1] !== s3[index3] && s2[index2] !== s3[index3]) {
      return false;
    }

    const stringify = index1 + ':' + index2;
    if(memo.hasOwnProperty(stringify)) {
      return memo[stringify];
    }

    if (s1[index1] === s3[index3]) {
      const take1 = helper(index1 + 1, index2, index3 + 1);
      if (take1) {
        memo[stringify] = true;
        return true; 
      }
    }

    if (s2[index2] === s3[index3]) {
      const take2 = helper(index1, index2 + 1, index3 + 1);
      if (take2) {
        memo[stringify] = true;
        return true; 
      }
    }

    memo[stringify] = false;
    return false;
  };

  helper(0, 0, 0);
  foo = 1
};

const s1 = 'bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa';
const s2 = 'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab';

// const s3 = 'aadbbcbcac';
const s3 = 'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab';

console.time('first');
const a = isInterleave(s1, s2, s3);
console.timeEnd('first');
console.log(a);