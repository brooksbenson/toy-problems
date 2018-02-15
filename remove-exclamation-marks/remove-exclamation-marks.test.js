const removeExclamationMarks = require('./remove-exclamation-marks');

test('should remove exclamation marks', () => {
  const str = 'Hey! Have a wonderful day!';
  const res = removeExclamationMarks(str);
  const ans = 'Hey Have a wonderful day';
  expect(res).toBe(ans);
});