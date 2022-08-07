function meanderingArray(unsorted) {
  // Write your code here

  // first, sort given unsorted one.
  unsorted.sort((a, b) => a - b);

  // then, remove duplicates from the original array
  const unsortedDuplicatesRemoved = unsorted.filter((value, index, array) => value !== array[index + 1])

  // array to store the result
  const sorted = [];

  // until all elements in the original array is sorted
  while (unsorted.length) {
    sorted.push(unsorted.pop());      // push first  the current maximum
    sorted.push(unsorted.shift());    // push then  the current minimum
  }

  // return the result
  return sorted;
}


console.log(meanderingArray([7, 5, 2, 7, 8, -2, 25, 25]));
// console.log(meanderingArray());
// console.log(meanderingArray());
