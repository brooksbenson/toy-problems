const permutations = require('./permutations');

test('should return all the permutations of abc', () => {
  expect(permutations('abc')).toEqual(['abc', 'bac', 'bca', 'cba', 'cab', 'acb']);
})