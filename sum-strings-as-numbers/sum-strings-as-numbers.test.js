const add = require('./sum-strings-as-numbers');

test('should correctly sum 999 + 999', () => {
  let res = add('999', '999');
  expect(res).toBe('1998');
});

test('should correctly sum 123 + 456', () => {
  let res = add('123', '456');
  expect(res).toBe((123 + 456).toString());
});