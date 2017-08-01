function periodicSequence(s0, a, b, m) {
  let hasRepeat = false;
  let index = 1;
  const sequence = [s0];
  const set = new Set();
  set.add(s0);
    
  while (!hasRepeat) {
    const calculation = (a * sequence[index - 1] + b) % m;
    sequence.push(calculation);

    if(set.has(calculation)) {
      hasRepeat = true;
    }

    set.add(calculation);
    index++;
  }
    
  const repeat = sequence[sequence.length - 1];
  for (let i = sequence.length - 2; i >= 0; i--) {
    if (repeat === sequence[i]) {
      return sequence.length - i - 1;
    }
  }
}

const s0 = 11;
const a = 2;
const b = 6;
const m = 12;

const result = periodicSequence(s0, a, b, m);
console.log(result);