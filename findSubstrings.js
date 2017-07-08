// BRUTE FORCE
function findSubstringsB(words, parts) {
  const result = [];

  for(let i = 0; i < words.length; i++) {
    let word = words[i];
    let max = '';
    let start = null;
    let stop = null;

    for (let j = 0; j < word.length; j++) {
      let chunk = word[j];

      for (let k = j + 1; k <= word.length; k++) {
        if (parts.includes(chunk) && chunk.length > max.length) {
          max = chunk;
          start = j;
          stop = j + chunk.length;
        }
        chunk += word[k];
      }
    }

    if (max) {
      word = word.slice(0, start) + '[' + word.slice(start, stop) + ']' + word.slice(stop);
    }
    result.push(word);
  }

  return result;
}

class Node {
  // Making a Trie
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isFinal = false;
  }
}

const addWordToTrie = (word, root) => {
  let current = root;
  for (let char of word) {
    if (!current.children[char]) {
      current.children[char] = new Node(char);
    }
    current = current.children[char];
  }
  current.isFinal = true;
};

const makeTrie = words => {
  const root = new Node();
  for (let word of words) {
    addWordToTrie(word, root);
  } 
  return root;
};

const findSubString = (word, root) => {
  let max = 0;
  let start = 0;

  for (let i = 0; i < word.length; i++) {
    let current = root;
    let count = 0;

    for (let j = i; j < word.length; j++) {
      if (!current.children[word[j]]) {
        break;
      }
      
      current = current.children[word[j]];
      count++;
      
      if (count > max && current.isFinal) {
        max = count;
        start = i; 
      }
    }
  }

  if (max) {
    let stop = start + max;
    word = word.slice(0, start) + '[' + word.slice(start, stop) + ']' + word.slice(stop);
  }

  return word;
};

function findSubstrings(words, parts) {
  const trie = makeTrie(parts);
  const result = [];

  for (let word of words) {
    const final = findSubString(word, trie);
    result.push(final);
  }

  return result;
}


const words = [
  'Apple', 
  'Melon', 
  'Orange', 
  'Watermelon',
];

const parts = [
  'a', 
  'mel', 
  'lon', 
  'el', 
  'An'
];

[
  'Apple', 
  'Me[lon]', 
  'Or[a]nge', 
  'Water[mel]on'
];

const result = findSubstrings(words, parts);
console.log(result);

