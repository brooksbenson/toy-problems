const ragbabyModule = require('./ragbaby-cipher');

test('should successfully create keyed alphabets', () => {
  const key = 'test';
  const correctLowerKeyedAlphabet = 'testabcdfghijklmnopqruvwxyz';
  const correctUpperKeyedAlphabet = correctLowerKeyedAlphabet.toUpperCase();
  const { lowerAlpha, upperAlpha } = ragbabyModule.createKeyedAlphabet(key);
  expect(lowerAlpha).toBe(correctLowerKeyedAlphabet);
  expect(upperAlpha).toBe(correctUpperKeyedAlphabet);
});

test('should successfully create keyed alphabets when key has repeating letters', () => {
  const key = 'tttesssst';
  const correctLowerKeyedAlphabet = 'testabcdfghijklmnopqruvwxyz';
  const correctUpperKeyedAlphabet = correctLowerKeyedAlphabet.toUpperCase();
  const { lowerAlpha, upperAlpha } = ragbabyModule.createKeyedAlphabet(key);
  expect(lowerAlpha).toBe(correctLowerKeyedAlphabet);
  expect(upperAlpha).toBe(correctUpperKeyedAlphabet);
});

test('should successfully encode the text "cipher" when given the key "cipher"', () => {
  const key = 'cipher';
  const expectedResult = "ihrbfj";
  const actualResult = ragbabyModule.encode('cipher', key);
  expect(actualResult).toBe(expectedResult);
});

test('should successfully encode the text "cipher" when given the key "cipher" with repeating letters', () => {
  const key = 'cccciiiipherrrr';
  const expectedResult = "ihrbfj";
  const actualResult = ragbabyModule.encode('cipher', key);
  expect(actualResult).toBe(expectedResult);
});

test('should successfully decode the text "ihrbfj" when given the key "cipher"', () => {
  const key = 'cipher';
  const expectedResult = 'cipher';
  const actualResult = ragbabyModule.decode('ihrbfj', key);
  expect(actualResult).toBe(expectedResult);
});

test('should successfully decode the text "ihrbfj" when given the key "cipher"', () => {
  const key = 'cipher';
  const expectedResult = 'cipher';
  const actualResult = ragbabyModule.decode('ihrbfj', key);
  expect(actualResult).toBe(expectedResult);
});