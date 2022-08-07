
function solution(numbers, target) {

  // DFS 탐색 결과를 기록합니다.
  let count = 0;

  // DFS 탐색을 수행합니다.
  getAnswer(0, 0);

  // 탐색 결과를 반환합니다.
  return count;

  /**
   * DFS 탐색을 수행하는 함수입니다.
   * @param {number} currentIndex   현재까지 탐색한 갯수
   * @param {number} currentValue   현재까지 탐색한 갯수까지 계산된 결과값
   * @returns {undefined}            void function
   */
  function getAnswer(currentIndex, currentValue) {

    // 아직 경우의 수 탐색이 더 남은 경우, 다음 위치까지 탐색을 들어갑니다.
    if (currentIndex < numbers.length) {
      getAnswer(currentIndex + 1, currentValue + numbers[currentIndex]);  // 현재까지의 계산 결과에 다음 값을 + 하는 경우 탐색
      getAnswer(currentIndex + 1, currentValue - numbers[currentIndex]);  // 현재까지의 계산 결과에 다음 값을 - 하는 경우 탐색
    }

    // 모든 값들을 계산했으며, 찾고자 하는 값과 일치하는 경우, count 값을 1 더합니다.
    else if (currentValue === target) {
      count++;
    }
  }
}

console.log(solution(	[1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
