function textJustification(words, l) {
  const result = [];
  let row = [];
  let rowChars = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length + rowChars + (row.length - 1) >= l) {
      if (row.length === 1) {
        result.push(row[0] + ' '.repeat(l - rowChars));
      } else {
        let totSpace = l - rowChars;
        let spacesToFill = row.length - 1;
        let builder = '';

        for (let rowWord of row) {
          let space = Math.ceil(totSpace / spacesToFill);
          builder += rowWord + ' '.repeat(space);
          spacesToFill--;
          totSpace -= space;
        }

        result.push(builder);
      }

      row = [];
      rowChars = 0;
    }

    row.push(word);
    rowChars += word.length;

    if (i === words.length - 1) {
      let builder = row[0];

      for (let i = 1; i < row.length; i++) {
        const rowWord = row[i];
        builder += ' ' + rowWord;
      }

      builder += ' '.repeat(l - builder.length);
      result.push(builder);
    }
  }

  return result;
}

const words = ['Two', 'words.'];
const result = textJustification(words, 9);
console.log(result);
