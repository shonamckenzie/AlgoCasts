function pangram(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const regex = /\s/g;
  const lowercase = str.toLowerCase().replace(regex, '');

  for (let i = 0; i < alphabet.length; i++) {
    // check if letters from alphabet are in str, if letter not found returns -1
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return 'not pangram';
    }
  }
  return 'pangram';
}

// function pangram(str) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return alphabet.every(letter => str.toLowerCase().includes(letter));
// }

console.log(pangram('The quick brown fox jumps over the lazy dog'));
