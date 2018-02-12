const searchEng = require('./mini-search-engine');

test(`should return 'No valid input' when the search word contains non-alphanumeric characters`, () => {
  expect(searchEng('helloooo', 'helloooo!')).toBe('No valid input');
});

test(`should return 'No valid input' when the newWord contains non-alphanumeric characters and the search method is 2`, () => {
  expect(searchEng('test test', 'test', 2, 'test!')).toBe('No valid input');
});

test(`should return 2 matches when text includes day twice and search word is day`, () => {
  expect(searchEng('This day is a good day', 'day')).toEqual({
    matches: 2,
    newString: ''
  });
});