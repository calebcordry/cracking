const canPlace = (word, current) => {
  const checkIndex = current.length;
  let row = 0;
  for (let i = 0; i < checkIndex; i++) {
    if (word[i] !== current[row][checkIndex]) {
      return false;
    }
    row++;
  }

  return true;
};

/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquaresBrute = function(words) {
  const result = [];

  const helper = current => {
    if (current.length === current[0].length) {
      result.push(current);
    }

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (canPlace(word, current)) {
        helper(current.concat(word));
      }
    }
  };

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    helper([word]);
  }

  return result;
};

// ROUND 2
class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.terminating = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('*');
  }

  insertArray(array) {
    for (let word of array) {
      let current = this.root;

      for (let char of word) {
        if (!current.children[char]) {
          current.children[char] = new TrieNode(char);
        }

        current = current.children[char];
      }

      current.terminating = true;
    }
  }

  prefixLookup(prefix) {
    const result = [];

    const helper = (current, index, builder) => {
      if (!current) { return; }

      if (index < prefix.length) {
        const char = prefix[index];
        helper(current.children[char], index + 1, builder + char);
      }

      else {
        if (current.terminating) {
          result.push(builder);
        }

        const children = Object.keys(current.children);
        for (let childKey of children) {
          const childNode = current.children[childKey];
          helper(childNode, index, builder + childNode.value);
        }
      }
    };

    helper(this.root, 0, '');
    return result;
  }
}


/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
  const result = [];

  const trie = new Trie();
  trie.insertArray(words);

  const helper = grid => {
    if (grid.length === grid[0].length) {
      result.push(grid);
    }

    const index = grid.length;
    let prefix = '';

    for (let i = 0; i < grid.length; i++) {
      prefix += grid[i][index];
    }

    const possibles = trie.prefixLookup(prefix);
    possibles.forEach(possible => helper(grid.concat(possible)));
  };

  for (let word of words) {
    helper([word]);
  }

  return result;
};

const input = ['area', 'lead', 'wall', 'lady', 'ball'];
// const input = ['abat', 'baba', 'atan', 'atal'];
const res = wordSquares(input);
console.log(res);
