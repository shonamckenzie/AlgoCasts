const isMatchingBrackets = function(input) {
  // create new string removing any non bracket characters
  const str = input.replace(/[a-zA-Z.&^*+-/\\]+|\d| /g, '');
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    // if current char matches one of the following brackets, add to stack
    // if it doesn't match, remove the char from the top of the stack
    // compare current char to the popped char
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '<') {
      stack.push(str[i]);
    } else {
      const last = stack.pop();
      if (str[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

// const isMatchingBrackets = function(str) {
//   const brackets = '[]{}()<>';
//   const stack = [];

//   for (const bracket of str) {
//     // get the index of the passed in bracket in our brackets variable
//     const bracketsIndex = brackets.indexOf(bracket);

//     // if element not in brackets move on to next char
//     if (bracketsIndex === -1) {
//       // eslint-disable-next-line no-continue
//       continue;
//     }

//     // if bracketsIndex is even this shows it's an opening bracket
//     if (bracketsIndex % 2 === 0) {
//       stack.push(bracketsIndex + 1);
//     } else if (stack.length === 0 || stack.pop() !== bracketsIndex) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };

module.exports = isMatchingBrackets;
