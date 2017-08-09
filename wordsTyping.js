/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  const fullSentence = sentence.join(' ') + ' ';
  let start = 0;

  for (let i = 0; i < rows; i++) {
    start += cols;
    const sentenceIndex = start % fullSentence.length;

    if (fullSentence[sentenceIndex] === ' ') {
      start++;
    }

    else {
      let prevIndex = (start - 1) % fullSentence.length;
      while (start > 0 && fullSentence[prevIndex] !== ' ') {
        start--;
        prevIndex = (start - 1) % fullSentence.length;
      }
    }
  }

  return Math.floor(start / fullSentence.length);
};

const a = ['a', 'b', 'c'];
const result = wordsTyping(a, 2, 7);
console.log(result);
