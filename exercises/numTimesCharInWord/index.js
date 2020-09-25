// function countOfChars(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === letter) {
//       count ++;
//     }
//   }
//   console.log(count);
// }

function buildCharMap(str) {
  const charMap = {};
  let max = 0;
  let maxChar = ' ';
  for (const char of str.replace(/[^\w]/g, '')) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(`${maxChar} = ${max}`);
}

// countOfChars('i have a nice puppy called max', 'a')
buildCharMap('i have a nice puppy called max');
