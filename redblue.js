function wordpattern(pattern, input) {
  if(!pattern.length) { return 0; }
  if(!input.length) { return 0; }

  const map = {};

  const lookForMatch = (patternIndex, inputIndex, map) => {
    if (patternIndex === pattern.length && inputIndex == input.length) { return 1; }
    if (patternIndex === pattern.length || inputIndex == input.length) { return 0; }

    const currentPatternChar = pattern[patternIndex];

    if (map[currentPatternChar]) {
      const testString = map[currentPatternChar];

      if (inputIndex + testString.length > input.length) { return 0; }
      if (input.slice(inputIndex, testString.length + inputIndex) !== testString) { return 0; }
      
      return lookForMatch(patternIndex + 1, inputIndex + testString.length, map);
    }

    for (let i = inputIndex; i < input.length; i++) {

      map[currentPatternChar] = input.slice(inputIndex, i + 1);
      
      if (lookForMatch(patternIndex + 1, i + 1, map)) { return 1; }
    }
    
    delete map[currentPatternChar];
    
    return 0;
  };

  return lookForMatch(0, 0, map);
}

const result = wordpattern('abba', 'redredredred');
console.log(result);