// slice arguments - start index and optional end index position
// splice arguments - start index and optional number of elements to remove/add

const array = [1, 3, 5, 7, 9];
console.log(array.slice(1, 3));
// returns [3, 5]
console.log(array);

console.log(array.slice(-3, 5));
// returns [5,7,9]

console.log(array.slice(-3, -1));
// returns [5, 7]

const array2 = [1, 3, 5, 7, 9];
console.log(array2.splice(1, 2));
// returns [3, 5]
console.log(array2);
console.log(array2.splice(1, 2));
// returns [7, 9]
