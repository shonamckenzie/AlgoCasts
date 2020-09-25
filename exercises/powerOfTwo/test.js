const powerOfTwo = require('./index.js');

test('number is power of two', () => {
  expect(powerOfTwo(32)).toEqual(true);
});

test('number is not power of two', () => {
  expect(powerOfTwo(9)).toEqual(false);
});
