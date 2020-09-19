// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // const strArray = str
  //   .split(' ')
  //   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(' ');
  // return strArray;

  // const capitalized = [];
  // const words = str.split(' ');
  // words.forEach(word => {
  //   capitalized.push(word[0].toUpperCase() + word.slice(1));
  // });
  // return capitalized.join(' ');
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i - 1) === ' ') {
      result += str.charAt(i).toUpperCase();
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

module.exports = capitalize;
