var longestPalindrome = function(s) {
  const map = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    
    if (map[letter]) {
      delete map[letter];
      count++;
    }

    else {
      map[letter] = 1;
    }
  }

  const odd = Object.keys(map).length ? 1 : 0;
  return count * 2 + odd;
};