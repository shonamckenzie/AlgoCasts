// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function buildCharMap(str) {
//   const charMap = {};
//   for (const char of str) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char] ++;
//     }
//   }
//   return charMap;
// }

function buildCharMap(str) {
  const charMap = {};
  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  // stringA.replace(/[^\w]/g, '').toLowerCase();
  // stringB.replace(/[^\w]/g, '').toLowerCase();
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  // for (const char of stringA) {
  //   if (!charMapA[char]) {
  //     charMapA[char] = 1;
  //   } else {
  //     charMapA[char] ++;
  //   }
  // }
  // for (const char of stringB) {
  //   if (!charMapB[char]) {
  //     charMapB[char] = 1;
  //   } else {
  //     charMapB[char] ++;
  //   }
  // }
  // eslint-disable-next-line no-restricted-syntax
  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
