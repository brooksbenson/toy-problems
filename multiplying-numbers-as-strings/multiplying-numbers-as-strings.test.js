const multiplyStrings = require('./multiplying-numbers-as-strings');

test('should multiply 30 by 69', () => {
  expect(multiplyStrings('30', '69')).toBe('2070');
});

test('should multiply 10 by 10', () => {
  expect(multiplyStrings('10', '10')).toBe('100');
});

test('should multiply 3 by 3', () => {
  expect(multiplyStrings('3', '3')).toBe('9');
});

test('should return properly for edge cases', () => {
  expect(multiplyStrings('0003', '1')).toBe('3');
  expect(multiplyStrings('0', '7')).toBe('0');
});

test('should multiply 98765 by 56894', () => {
  expect(multiplyStrings('98765', '56894')).toBe('5619135910');
});

test('should multiply very large numbers', () => {
  expect(multiplyStrings('1020303004875647366210', '2774537626200857473632627613')).toBe('2830869077153280552556547081187254342445169156730');
});