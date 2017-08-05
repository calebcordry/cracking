function decodeString(s) {
  let builder = '';
  let index = 0;
  const numStack = [];
  const chunkStack = [];
    
  while (index < s.length) {
    if (!isNaN(Number(s[index]))) {
      let num = s[index];
      index++;
      while (!isNaN(Number(s[index]))) {
        num += s[index];
        index++;
      }
      numStack.push(Number(num));
    }

    if (s[index] === '[') {
      chunkStack.push(builder);
      builder = '';
    }
    
    else if (s[index] === ']') {
      let temp = chunkStack.pop();
      const repeat = numStack.pop();
      for (let i = 0; i < repeat; i++) {
        temp += builder;
      }
      builder = temp;
    }

    else {
      builder += s[index];
    }

    index++;
  }
    
  return builder;
}

const input = 'z1[y]zzz2[abc]';
const result = decodeString(input);
console.log(result);
