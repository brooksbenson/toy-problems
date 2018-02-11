// updated solution
function createKeyedAlphabet(key) {
  key = new Set(key); //set creates a collection of unique values
  return [...key].join`` + [...'abcdefghijklmnopqrstuvwxyz'].filter(x => !key.has(x)).join``;
}

function encode(text, key) {
  const abcz = createKeyedAlphabet(key);

  let i = 0;
  return [...text].map(c => {
    if (/\W/.test(c)) {
      i = 0;
      return c;
    }
    let $ = c.toLowerCase();
    let newIdx = (abcz.indexOf($) + ++i) % 26;
    return /[A-Z]/.test(c) 
      ? abcz[newIdx].toUpperCase()
      : abcz[newIdx];
  }).join``; 
}

function decode(text, key) {
  const abcz = createKeyedAlphabet(key);

  let i = 0;
  return [...text].map(c => {
    if (/\W/.test(c)) {
      i = 0;
      return c;
    }
    let $ = c.toLowerCase();
    let newIdx = (abcz.indexOf($) - ++i) % 26;
    if (newIdx < 0) newIdx = 26 - (newIdx % 26 * -1);
    return /[A-Z]/.test(c) 
      ? abcz[newIdx].toUpperCase()
      : abcz[newIdx];
  }).join``; 
}

module.exports = {
  createKeyedAlphabet,
  encode,
  decode
}