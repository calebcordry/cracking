const test = (map1, map2) => {
  if (map1.length !== map2.length) { return false; }

  for (let key of Object.keys(map1)) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
}

const find = (s, b) => {
  const permutations = [];
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = map[char] + 1 || 1;
  }

  let start = 0;
  let end = s.length;

  let testMap = {};
  for (let i = start; i < end; i++) {
    const char = b[i];
    testMap[char] = testMap[char] + 1 || 1;
  }

  while (end < b.length) {

    if (test(map, testMap)) {
      permutations.push(b.slice(start, end));
    }
    
    const char = b[end];
    testMap[char] += 1;
    testMap[b[start]] -= 1;
    
    start++;
    end++;
  }

  return permutations;
};

console.time('loop');
const result = find('abbc', 'cbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabc');
console.timeEnd('loop');

const find0 = (s, b) => {
  const permutations = [];
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = map[char] + 1 || 1;
  }

  let start = 0;
  let end = s.length;
  let distance = s.length;

  for (let i = start; i < end; i++) {
    const char = b[i];
    if (map[char] === undefined || map[char] <= 0 ) {
      distance++;
    } 
    
    if (map[char] > 0 ) {
      distance--;
    }

    map[char] = map[char] === undefined ? -1 : map[char] - 1;
  }

  while (end < b.length) {

    if (distance === 0) {
      permutations.push(b.slice(start, end));
    }
    
    const char = b[end];
    if (map[char] === undefined || map[char] <= 0 ) {
      distance++;
    } 
    if (map[char] > 0 ) {
      distance--;
    }
    map[char] = map[char] === undefined ? -1 : map[char] - 1;
    
    const front = b[start];
    if (map[front] === undefined || map[front] >= 0 ) {
      distance++;
    } 

    if (map[front] < 0 ) {
      distance--;
    }

    map[front] = map[front] === undefined ? 1 : map[front] + 1;

    start++;
    end++;
  }

  return permutations;
};

console.time('distance');
const result0 = find0('abbc', 'cbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabccbabadcbbabbcbabaabccbabc');
console.timeEnd('distance');
console.log(result0 === result);