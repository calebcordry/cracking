const swap = (a, i, j) => {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

const permutations = array => {
  if (!array.length) { return ''; }
  array = array.split('');
  const result = [];

  const helper = index => {
    // console.log(array);
    if(index >= array.length) {
      result.push([...array]);
      return;
    }

    for (let i = index; i < array.length; i++) {
      swap(array, index, i);
      helper(index + 1);
      swap(array, index, i);
    }
  };

  helper(0);
  return result;
};

const permutations2 = string => {
  if (!string) { return ''; }

  const result = [];

  const helper = (prefix, suffix) => {
    if(suffix.length === 0) {
      result.push(prefix);
    }

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      helper(prefix + char, suffix.slice(0, i) + suffix.slice(i + 1));
    }
  };

  helper('', string);
  return result;
};


const result = permutations('abc');
console.log(result);
