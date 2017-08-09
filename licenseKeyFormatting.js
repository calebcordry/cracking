/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  if (!S.length) { return ''; }

  let builder = '';
  let count = 0;

  for (let i = S.length - 1; i >= 0; i--) {
    const char = S[i].toUpperCase();
    if (char === '-') { continue; }

    if (count === K) {
      builder = '-' + builder;
      count = 0;
    }

    builder = char + builder;
    count++;
  }

  return builder;
};
