//The ragbaby cipher is a substitution cipher that encodes/decodes a text.
//The encoding and decoding functions receive a piece of text and a key.

//A text can contain 1 to n words. Each character within a word is indexed based on the word it is in,
//the index system uses the natural number system (1,2,3,...)

//To obtain the encoded text, each character within a word should be replaced
//with the letter in the keyed alphabet the corresponding number of places to the
//right of it (wrapping if necessary). Non-alphabetic characters are preserved.

const createKeyedAlphabet = (key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let trimmedKey = ''; 
  for (let i = 0; i < key.length; i++) {
    if (trimmedKey[trimmedKey.length-1] !== key[i]) {
      trimmedKey += key[i];
    }
  }

  return trimmedKey + alphabet.replace(new RegExp(`[${trimmedKey}]`), '');
};

const encode = (text, key) => {
  const keyedAlphabet = createKeyedAlphabet(key);
};

const decode = (text, key) => {
  const keyedAlphabet = createKeyedAlphabet(key);
};

module.exports = {
  createKeyedAlphabet: createKeyedAlphabet
};