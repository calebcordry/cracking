function electionWinner(votes) {
  const tally = {};
  for (let i = 0; i < votes.length; i++) {
    const name = votes[i];
    tally[name] = tally[name] + 1 || 1;
  }

  const keys = Object.keys(tally);
  const results = keys.sort((a, b) => {
    if (tally[a] === tally[b]) {
      return a < b;
    }

    return tally[b] - tally[a];
  });

  return results[0];
}

const input = ['Vi', 'Ve', 'R', 'D', 'M', 'M', 'F', 'F', 'R', 'Ve'];
const result = electionWinner(input);
console.log(result);

//25 min