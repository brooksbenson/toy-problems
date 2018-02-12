//build a function that defines 4 parameters
  //a string
  //a word
  //a search method
    //1: searching for words (default)
    //2: replacing each occurence of a word 
  //a new word

//the function should return an object with two properties defined:
  //matches
  //new string (if search method is 2)

function searchEng(text, word, method = 1, newWord) {
  if (!text.length || /\W/.test(word) || /\W/.test(newWord)) {
    return 'No valid input';
  }

  let wordExp = new RegExp(`\\b${word}\\b`, 'g');
  return {
    matches: (text.match(wordExp) || []).length,
    newString: method == 1 ? '' : text.replace(wordExp, newWord)
  }
}

module.exports = searchEng;