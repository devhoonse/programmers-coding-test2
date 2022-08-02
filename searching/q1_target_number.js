function solution(numbers, target) {
  let answer = 0;
  getAnswer(0,0);
  function getAnswer(x,value) {
    if (x < numbers.length) {

      getAnswer(x + 1,value + numbers[x]);
      getAnswer(x + 1,value - numbers[x]);

    } else if (value === target)
      answer++;
  }

  // 탐색 결과를 반환합니다.
  return answer;
}

console.log(solution(	[1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
