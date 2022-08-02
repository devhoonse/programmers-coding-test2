function solution(n, computers) {

  // 각 컴퓨터별로 조사 여부를 기록할 배열입니다.
  const isVisited = Array(n).fill(false);

  // 네트워크 갯수를 카운트합니다.
  let answer = 0;
  for (let fromComputer = 0; fromComputer < n; fromComputer++) {  // 네트워크 내에 각 컴퓨터를 하나씩 순회합니다.
    if (!isVisited[fromComputer]) {   // 아직 조사한 적이 없는 컴퓨터일 경우에만 탐색을 합니다.
      answer++;                       // 네트워크 갯수를 하나 추가합니다.
      DFS(fromComputer);              // fromComputer 에서 출발하여 네트워크를 타고 갈 수 있는 모든 컴퓨터들을 방문하게 되고,
                                      // isVisited 내에 각 자리에 true 가 기록됩니다.
    }
  }

  // 네트워크 갯수를 반환합니다.
  return answer;

  /*
   * 네트워크를 타고 들어가며 탐색하기 위한 함수입니다.
   */
  function DFS(currentComputer) {

    // 이미 조사한 적이 있는 컴퓨터일 경우, 더 이상 탐색을 진행하지 않습니다.
    if (isVisited[currentComputer])
      return;

    // 현재 컴퓨터에 대해 조사 여부를 true 로 기록합니다.
    isVisited[currentComputer] = true;

    // 현재 컴퓨터에서 갈 수 있는 모든 컴퓨터들로 탐색을 확대합니다.
    for (let toComputer = 0 ; toComputer < n ; toComputer++)
      if (computers[currentComputer][toComputer] === 1)
        DFS(toComputer);
  }
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
