// function powerOf2(n) {
//   if (typeof n !== 'number') return 'Not a number';

//   // eslint-disable-next-line no-bitwise
//   return n && (n & (n - 1)) === 0;
// }

// function powerOf2(n) {
//   const x = Math.pow(2, Math.round(Math.log(n) / Math.log(2)));
//   return x === n;
// }

// function powerOf2(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(`${i}:`, Math.log2(i) % 1 === 0);
//   }
// }
// powerOf2(100);

// function powerOf2(n) {
//   return Math.log2(n) % 1 === 0;
// }

// console.log(Math.pow(16, 2));

function powerOf2(n) {
  while (n > 1) {
    n /= 2;
  }
  if (n === 1) {
    return true;
  }
  return false;
}
module.exports = powerOf2;
