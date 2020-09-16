// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}

// function chunk(array, size) {
//   const chunkedArray = [];
//   let i = 0;
//   while (i < array.length) {
//     chunkedArray.push(array.slice(i, i + size));
//     i += size;
//   }
//   return chunkedArray;
// }

// function chunk(array, size) {
//   const newArray = [];
//   for (const element of array) {
//     // get last element of array
//     const last = newArray[newArray.length - 1];
//     // check if the last element exists or array is correct number of chunks
//     if (!last || last.length === size) {
//       // push in a new chunk with the element inside
//       newArray.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return newArray;
// }

// function chunk(array, size) {
//  create empty array to hold sub arrays
//   const newArray = [];
// loop through the array removing the elements in the chunk size to a new array
//   for (let i = 0; i < array.length; i += size) {
//     const myChunk = array.slice(i, i + size);
// push chunks to main array
//     newArray.push(myChunk);
//   }
//   return newArray;
// }

module.exports = chunk;
