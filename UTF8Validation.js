/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  const allBin = data.map(num => {
    let bin = num.toString(2);
    if (bin.length < 8) {
      const zeros = '0'.repeat(8 - bin.length);
      return zeros + bin;
    }
    return bin;
  });

  let current = 0;

  while (current < allBin.length) {
    const bin = allBin[current];
    const numBytes = bin.indexOf('0');

    if (numBytes === -1 || numBytes === 1 || numBytes > 4 || numBytes > allBin.length - current) {
      return false;
    }

    if (!numBytes) {
      current++;
    }

    else {
      for (let i = 1; i < numBytes; i++) {
        const bin = allBin[i + current];
        if (bin.slice(0,2) !== '10') {
          return false;
        }
      }

      current += numBytes;
    }
  }

  return true;
};


const data = [250,145,145,145,145];
const result = validUtf8(data);
console.log(result);

// data = [197, 130, 1],
// 11000101 10000010 00000001.

// data = [235, 140, 4]
// 11101011 10001100 00000100.
