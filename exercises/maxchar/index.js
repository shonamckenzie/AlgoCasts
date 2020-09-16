// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create object to store key:value pair of string
  const charMap = {};
  // creating variables to store the char and number of times it appears
  let max = 0;
  // eslint-disable-next-line camelcase
  let max_char = '';
  for (const char of str) {
    // if char has not appeared in charMap set the value to 1 otherwise increment the value
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      // eslint-disable-next-line no-plusplus
      charMap[char]++;
    }
    // console.log(charMap);
    // console.log(`${char} ${charMap[char]}`);
    // console.log(char);
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const char in charMap) {
    // if the value of the current char is greater than max then add value to max and char to max_char
    // using char for the key is the same as writing charMap.${char}
    if (charMap[char] > max) {
      max = charMap[char];
      max_char = char;
      console.log(`${char} = ${charMap[char]}`);
    }
  }
  // console.log(max_char);
  // console.log(max);
  // eslint-disable-next-line camelcase
  return max_char;
}

maxChar('aeiou1112aiu');
module.exports = maxChar;
