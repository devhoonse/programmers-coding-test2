// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // sort
  let sortedA = A.sort();

  // get maximum
  const maximumA = [...sortedA].pop();

  // if All Negative
  if (maximumA < 1)
    return 1;

  // search range : 1 ~ maximumA
  for (let i = 1 ; i < maximumA ; i++) {

    // if contains i, pop it from array
    if (sortedA.includes(i)) {
      sortedA = sortedA.filter(value => value !== i);
      continue;
    }

    // i is the value we are finding
    return i;
  }

  // if not found, the answer is
  return maximumA + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
