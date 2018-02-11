const ragbabyModule = require('./ragbaby-cipher2');

test('should successfully create keyed alphabets', () => {
  const key = 'test';
  const correctReturnValue = 'tesabcdfghijklmnopqruvwxyz';
  const returnedValue = ragbabyModule.createKeyedAlphabet(key);
  expect(returnedValue).toBe(correctReturnValue);
});

test('should successfully create keyed alphabets when key has repeating letters', () => {
  const key = 'ttttesssst';
  const correctReturnValue = 'tesabcdfghijklmnopqruvwxyz';
  const returnedValue = ragbabyModule.createKeyedAlphabet(key);
  expect(returnedValue).toBe(correctReturnValue);
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

test('should successfully encode "This is an example"', () => {
  const key = 'cipher';
  const expectedResult = 'Urew pu bq rzfsbtj.';
  const actualResult = ragbabyModule.encode('This is an example.', key);
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

test('should successfully decode the result of encoding "This is an example"', () => {
  const {encode, decode} = ragbabyModule;
  const key = 'secretkey';
  const message = 'This is an example';
  const encoded = encode(message, key);
  const decoded = decode(encoded, key);
  expect(decoded).toBe(message);
});

test('should successfully encode the result of decoding "This is an example"', () => {
  const {encode, decode} = ragbabyModule;
  const key = 'secretkey';
  const message = 'This is an example';
  const decoded = decode(message, key);
  const encoded = encode(decoded, key);
  expect(encoded).toBe(message);
});