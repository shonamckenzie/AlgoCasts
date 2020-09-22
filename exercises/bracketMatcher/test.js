const isMatchingBrackets = require('./index.js');

test('brackets match simple', () => {
  expect(isMatchingBrackets('(){}')).toBeTruthy();
});

test('brackets match complex', () => {
  expect(
    isMatchingBrackets(
      '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'
    )
  ).toBeTruthy();
});

test("brackets don't match", () => {
  expect(isMatchingBrackets('({(()))}}')).toBeFalsy();
});

test('it returns true for nested balanced brackets', () => {
  expect(isMatchingBrackets('([{<>}])')).toEqual(true);
});

test('it returns true for complex balanced strings', () => {
  expect(isMatchingBrackets('([])[{}]{(())}')).toEqual(true);
});

test('it returns true for strings containing balanced brackets and non-bracket characters', () => {
  expect(isMatchingBrackets('([a]b)')).toEqual(true);
});

test('it returns false for simple unbalanced brackets', () => {
  expect(isMatchingBrackets('(')).toEqual(false);
});

test('it returns false for complex unbalanced brackets', () => {
  expect(isMatchingBrackets('([])[{}]{(([))}')).toEqual(false);
});

test('it returns false for balanced brackets containing unbalanced brackets', () => {
  expect(isMatchingBrackets('({)')).toEqual(false);
});

test('it returns false for balanced but overlapping brackets', () => {
  expect(isMatchingBrackets('([)]')).toBeFalsy();
});

test('it returns false for matched but unbalanced brackets', () => {
  expect(isMatchingBrackets('([])[{}]{([)]}')).toEqual(false);
});

test('it returns false for extra closing brackets', () => {
  expect(isMatchingBrackets('()]')).toEqual(false);
});
