const ragbabyModule = require('./ragbaby-cipher');

test('should successfully create a keyed alphabet', () => {
  const key = 'test';
  const expectedResult = 'testabcdfghijklmnopqruvwxyz';
  const actualResult = ragbabyModule.createKeyedAlphabet(key);
  expect(actualResult).toBe(expectedResult);
});

test('should successfully create a keyed alphabet when key contains repeating letters', () => {
  const key = 'ttteeeesssstttt';
  const expectedResult = 'testabcdfghijklmnopqruvwxyz';
  const actualResult = ragbabyModule.createKeyedAlphabet(key);
  expect(actualResult).toBe(expectedResult);
});