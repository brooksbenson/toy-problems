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