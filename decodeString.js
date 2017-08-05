function decodeString(s) {
  let result = '';
  let builder = '';
  let index = 0;
    
  while (index < s.length) {
    let char = s[index];
        
    if (Number(char) !== NaN) {
      const number = char;
      index + 2;

      while(char !== ']') {
        char = s[index];
        builder += char;
        index++;
      }
            
      result += builder.repeat(number);
    }
        
    index++;
  }
    
  return result;
}

const input = '4[ab]';
const result = decodeString(input);
console.log(result);
