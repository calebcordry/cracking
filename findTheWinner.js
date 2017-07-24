const random = (min, max) => {
  // inclusive of lower, exclusive of upper
  return Math.floor(Math.random() * (max - min) + min);
};

function winner(andrea, maria, s) {
  let andreaScore = 0;
  let mariaScore = 0;
  let chosen = new Set();
  
  const check = s === 'Odd' ? 1 : 0;
  const choices = andrea.map((item, i) => i).filter(i => i % 2 === check);

  for (let i = 0; i < choices.length; i++) {
    let choice = random(0, choices.length);
    while (chosen.has(choice)) {
      choice = random(0, choices.length);
    }
    chosen.add(choice);
    const index = choices[choice];
    andreaScore += andrea[index] - maria[index];
    mariaScore += maria[index] - andrea[index];
  }

  if (andreaScore > mariaScore) {
    return 'Andrea';
  }

  if (mariaScore > andreaScore) {
    return 'Maria';
  }

  return 'Tie';
}

const result = winner([1,2,3], [2,1,3], 'Odd');
console.log(result);