// should take two argument, each being string representations of numbers,
// and return the product of multiplying those numbers as a string
function add(a, b) {
  a.length < b.length
    ? a = a.padEnd(b.length, '0')
    : b = b.padEnd(a.length, '0');
  let res = [];
  [...a].forEach((x, i) => {
    
  })
}