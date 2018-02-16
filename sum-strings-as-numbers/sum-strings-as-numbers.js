function sumStrings(a, b) { 
  var product = [], a = a.split(''), b = b.split('');
  
  while (a.length != b.length)
    a.length >= b.length ? b.unshift('0') : a.unshift('0');
    
  var z = '0';
  
  for (var i = a.length - 1; i >= 0; i--){
  
      var sum = (Number(a[i]) + Number(b[i]) + Number(z)).toString();
      
      if (sum.length > 1 || i === 0  && Number(z) === 1){
        product.unshift(sum.slice(1));
        z = '1';
      } else {
          product.unshift(sum);
          z = '0';
        }
    } 

  return product.join('').replace(/^0+/, '');
}