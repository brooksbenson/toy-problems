//The ragbaby cipher is a substitution cipher that encodes/decodes a text.
//The encoding and decoding functions receive a piece of text and a key.

//A text can contain 1 to n words. Each character within a word is indexed based on the word it is in,
//the index system uses the natural number system (1,2,3,...)
//A text can contains capital letters, and words can be separated by chararcters other than spaces

//To obtain the encoded text, each character within a word should be replaced
//with the letter in the keyed alphabet the corresponding number of places to the
//right of it (wrapping if necessary). Non-alphabetic characters are preserved.

//refactor solution

const createKeyedAlphabet = function(key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let trimmedKey = key.split('').reduce((newKey, char) => {
    if (!newKey.includes(char)) newKey += char;
    return newKey;
  }, '');
  return trimmedKey + alphabet.replace(new RegExp(`[${trimmedKey}]`, 'gi'), '');
};


const encode = function(text, key) {
  const keyedAlphabet = createKeyedAlphabet(key);
  const words = text.match(/\w+/g);

  let encodedWords = words.map(word => {
    return word.split('').map((oldChar, i) => {
      let newCharIndex = keyedAlphabet.indexOf(oldChar.toLowerCase()) + i + 1;
      newCharIndex -= 26 * Math.floor(newCharIndex / 26);

      return oldChar === oldChar.toUpperCase() 
        ? keyedAlphabet[newCharIndex].toUpperCase()
        : keyedAlphabet[newCharIndex] 
    }).join('');
  });

  return text.replace(/\w+/g, () => encodedWords.shift());
};

const decode = function(text, key) {
  const keyedAlphabet = createKeyedAlphabet(key);
  const words = text.match(/\w+/g);
  let decodedWords = words.map(word => {
   return word.split('').map((oldChar, i) => {
     let newCharIndex = keyedAlphabet.indexOf(oldChar.toLowerCase()) - i - 1;
     newCharIndex += 26 * Math.ceil(newCharIndex / -26);
     return oldChar === oldChar.toUpperCase() 
       ? keyedAlphabet[newCharIndex].toUpperCase()
       : keyedAlphabet[newCharIndex] 
    }).join('');
  });
  return text.replace(/\w+/g, () => decodedWords.shift());
};

module.exports = {
  createKeyedAlphabet: createKeyedAlphabet,
  encode: encode,
  decode: decode
};