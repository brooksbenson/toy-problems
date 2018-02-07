//The ragbaby cipher is a substitution cipher that encodes/decodes a text.
//The encoding and decoding functions receive a piece of text and a key.

//A text can contain 1 to n words. Each character within a word is indexed based on the word it is in,
//the index system uses the natural number system (1,2,3,...)
//A text can contains capital letters, and words can be separated by chararcters other than spaces

//To obtain the encoded text, each character within a word should be replaced
//with the letter in the keyed alphabet the corresponding number of places to the
//right of it (wrapping if necessary). Non-alphabetic characters are preserved.

const createKeyedAlphabet = function(key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const payload = new Object();

  let trimmedKey = ''; //recreates the key with repeating letters removed 
  for (let i = 0; i < key.length; i++) {
    if (trimmedKey[trimmedKey.length-1] !== key[i]) {
      trimmedKey += key[i];
    }
  }

  const keyedAlphabet = trimmedKey + alphabet.replace(new RegExp(`[${trimmedKey}]`, 'gi'), '');
  payload.lowerAlpha = keyedAlphabet;
  payload.upperAlpha = keyedAlphabet.toUpperCase();
  return payload;
};

//needs to wrap if char index + right positions is greater than 25

const encode = function(text, key) {
  const { lowerAlpha, upperAlpha } = createKeyedAlphabet(key);
  const words = text.match(/\w+/g);
  let encodedWords = words.map(word => {
    let encodedWord = '';
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      lowerAlpha.includes(char)
        ? encodedWord += lowerAlpha[lowerAlpha.indexOf(char) + i + 1]
        : encodedWord += upperAlpha[upperAlpha.indexOf(char) + i + 1]
    }
    return encodedWord;
  });
  return text.replace(/\w+/g, encodedWords.shift());
};

const decode = function(text, key) {
  const { lowerAlpha, upperAlpha } = createKeyedAlphabet(key);
  const words = text.match(/\w+/g);
  let decodedWords = words.map(word => {
    let decodedWord = '';
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      lowerAlpha.includes(char)
        ? decodedWord += lowerAlpha[lowerAlpha.indexOf(char) - i - 1]
        : decodedWord += upperAlpha[upperAlpha.indexOf(char) - i - 1]
    }
    return decodedWord;
  })
  return text.replace(/\w+/g, decodedWords.shift());
};

module.exports = {
  createKeyedAlphabet: createKeyedAlphabet,
  encode: encode,
  decode: decode
};