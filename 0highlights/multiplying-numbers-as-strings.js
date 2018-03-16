// should take two argument, each being string representations of numbers,
// and return the product of multiplying those numbers as a string

//helper function
function sumStrings(a, b) {
  a = [...a], b = [...b];
  let sum = '', c = 0;
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    sum = c % 10 + sum;
    c = c > 9;
  };
  return (sum.replace(/^0+/, '') || '0');
}

function multiplyStrings(a, b) {
  a = [...a].reverse(), b = [...b].reverse();
  let products = [];
  a.forEach((aN, i) => {
    let p = '0'.repeat(i);
    let r = '0';
    for (let bN of b) {
      let temp = ~~aN * ~~bN + ~~r;
      p = temp % 10 + p;
      r = ~~(temp / 10);
    }
    products.push((r || '') + p);
  });
  return products.reduce((c, p) => sumStrings(c, p), '0');
}

module.exports = multiplyStrings;