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

module.exports = sumStrings;