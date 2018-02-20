// should take two argument, each being string representations of numbers,
// and return the product of multiplying those numbers as a string

function sumStrings(a, b) {
  a = [...a], b = [...b];
  let sum = '', c = 0;
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    sum = c % 10 + sum;
    c = c > 9;
  };
  return (sum.replace(/^0+/, ''))
}


module.exports = add;
