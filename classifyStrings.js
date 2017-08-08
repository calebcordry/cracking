function classifyStrings(s) {
  if(s.match(/[aeiou]{3}/)) return 'bad';
  if(s.match(/[^aeiou?]{5}/)) return 'bad';

  if(s.match(/\?/)){
    var a=classifyStrings(s.replace(/\?/, 'a'));
    var b=classifyStrings(s.replace(/\?/, 'b'));

    if(a==b) return a;
    return 'mixed';
  }

  return 'good';
}

const result = classifyStrings('xnifpse???bggpirro');
console.log(result);
