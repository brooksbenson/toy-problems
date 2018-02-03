//The ragbaby cipher is a substitution cipher that encodes/decodes a text.
//The encoding and decoding functions receive a piece of text and a key.
//The text should be encoded and decoded, and the key is used to create a keyed alphabet.

//A text can contain 1 to n words. Each character within a word is indexed based on the word it is in,
//the index system uses the natural number system (1,2,3,...)

//To obtain the encoded text, each character within a word should be replaced by
//the character in the keyed alphabet that is n * word-char-index positions to the right of the character
//that matches the character in the word