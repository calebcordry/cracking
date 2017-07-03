const ransomNote = (magazine, ransom) => {

  const map = magazine.reduce((map, word) => {
    map[word] = map[word] + 1 || 1;
    return map;
  }, {});
    
  for (let i = 0; i < ransom.length; i++ ) {
    if (!map[ransom[i]]) {
      return console.log("No");
    }
    map[ransom[i]] = map[ransom[i]] - 1;
  }
  console.log("Yes");
};

