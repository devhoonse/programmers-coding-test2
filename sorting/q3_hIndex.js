function solution(citations) {
  const citationsSorted = citations.sort((a, b) => b - a);

  let hIndex = 0;
  while (hIndex + 1 <= citationsSorted[hIndex])
    hIndex++
  return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]));
