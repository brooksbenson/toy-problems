// should take two argument, each being string representations of numbers,
// and return the product of multiplying those numbers as a string


function add(a, b) {
  a = [...a.replace(/^0+/, '')].reverse(); 
  b = [...b.replace(/^0+/, '')].reverse();
  let greater = a.length > b.length ? a : b;
  let product = [0];
  greater.forEach((_, i) => {
    let sum = eval(`${a[i] || 0} + ${b[i] || 0}`);
    product.unshift(sum % 10);
    product[1] += Number(sum > 9);
  });
  return product.reverse().join``;
}