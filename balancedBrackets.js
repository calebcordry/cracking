const brackets = string => {
  const map = {
    '(': 'left',
    '[': 'left',
    '{': 'left',
    '}': 'right',
    ']': 'right',
    ')': 'right',
  };
  
  const pairs = { ')':'(', '}':'{', ']':'[' };
  
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] === 'left') {
      stack.push(string[i]);
    }
    
    if (map[string[i]] === 'right') {
      if (stack[stack.length - 1] !== pairs[string[i]]) {
        return 'NO';
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? 'YES' : 'NO'; 
};
