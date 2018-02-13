const findNextSquare = require('./next-perfect-square');

test('should return the perfect square 100 when provided the perfect square 81', () => {
  expect(findNextSquare(81)).toBe(100);
});

test('should return -1 when the square root of the argument is not a perfect square', () => {
  expect(findNextSquare(80)).toBe(-1);
})