function solution(array, commands) {

  // 정답 배열
  const answer = [];

  // command 들을 하나씩 꺼내서 파악합니다.
  for (command of commands) {

    // 0. command 파악
    const [i, j, k] = command;

    // 1. command 에 따라 array slice (i 번째부터 ~ j 번째까지)
    const arraySliced = array.slice(i - 1, j);

    // 2. slice 된 array 를 sort
    const arraySorted = arraySliced.sort((a, b) => a - b);

    // 3. command 에 따라 sort 된 array 에서 k 번째 숫자를 가져옴
    answer.push(arraySorted[k - 1] || null);
  }

  // 정답을 반환
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 2, 3]]));
