const longestConsec = require('./consecutive-strings');

test('should return the first longest occurence of k consecutive strings in an array', () => {
  const a = ['aa', 'bb', 'cc', 'ddd', 'ee'];
  const res = longestConsec(a, 2);
  const ans = 'ccddd';
  expect(res).toBe(ans);
});

test('should return an empty string if k is greater than the length of a', () => {
  const a = ['1', '2', '3'];
  const res = longestConsec(a, 4);
  expect(res).toBe('');
});

test('should return the joined array k is equal to the length of a', () => {
  const a = ['1', '2', '3'];
  const res = longestConsec(a, 3);
  expect(res).toBe(a.join``);
});

test('should return an empty string if k is negative', () => {
  const a = ['1', '2', '3'];
  const res = longestConsec(a, -3);
  expect(res).toBe('');
});