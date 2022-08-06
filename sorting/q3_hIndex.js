function solution(citations) {

  // 인용 횟수 배열을 내림차순으로 정렬합니다.
  const citationsSorted = citations.sort((a, b) => b - a);

  // hIndex 값을 0 부터 시작하여 순차적으로 올려가며 확인합니다.
  let hIndex = 0;

  // hIndex + 1 회 이상으로 인용된 논문의 갯수가 hIndex + 1 편이면 hIndex 값을 1 증가시킵니다.
  while (hIndex + 1 <= citationsSorted[hIndex])
    hIndex++

  // 계산된 hIndex 값을 반환합니다.
  return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]));
