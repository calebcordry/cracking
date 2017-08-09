const url2code = {};
const code2url = {};
const choices = 'abcdefghijklmnopqrstuvwxyz0123456789';
const codeLength = 7;

const generateRandom = len => {
  let builder = '';
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * choices.length);
    builder += choices[index];
  }
  return builder;
};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  if (url2code.hasOwnProperty(longUrl)) {
    return 'http://tinyurl.com/' + url2code[longUrl];
  }


  let key = generateRandom(codeLength);
  while (code2url.hasOwnProperty(key)) {
    key = generateRandom(codeLength);
  }

  url2code[longUrl] = key;
  code2url[key] = longUrl;

  return 'http://tinyurl.com/' + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return code2url[shortUrl.slice(-codeLength)];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const url = 'https://leetcode.com/problems/design-tinyurl';
const encoded = encode(url);
console.log(encoded);
const decoded = decode(encoded);
console.log(decoded);
