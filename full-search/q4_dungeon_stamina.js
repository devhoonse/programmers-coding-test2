function solution(k, dungeons) {

  // 던전의 갯수를 확인합니다.
  const N = dungeons.length;

  // 각 던전들을 방문했는지 여부를 기록할 배열입니다.
  const visited = new Array(N).fill(0);

  // 주어진 상황에서 유저가 최대로 방문 가능한 던전들의 갯수를 카운트합니다.
  let answer = 0;

  // DFS 를 실행하여 answer 값을 계산합니다.
  dfs(k, 0);

  // DFS 를 실행하여 계산된 answer 값을 반환합니다.
  return answer;

  /**
   * 모든 가능한 던전 방문 시나리오들을 탐색하기 위한 DFS 로직을 수행하는 함수입니다.
   * @param {Number} k   지금까지 남아있는 스태미나의 양
   * @param {Number} cnt 지금까지 카운트 된 던전 방문 횟수
   * @return {undefined}  반환 값이 없습니다. 상위 클로저의 answer 값을 업데이트 합니다.
   */
  function dfs(k, cnt){

    // 지금까지 카운트 된 갯수가 현재 answer 에 기록된 갯수보다 크면 업데이트합니다.
    answer = Math.max(cnt, answer);

    // 모든 던전들을 하나씩 확인합니다.
    for (let j = 0; j < N ; j++){

      // 현재 던전을 탐험하기 위해 필요한 최소 스태미나를 갖고 있고, 아직 탐험한 적이 없는 곳일 경우
      if (k >= dungeons[j][0] && !visited[j]){
        visited[j] = 1;                             // 현재 던전을 방문한 처리를 합니다.
        dfs(k - dungeons[j][1], cnt + 1);   // DFS 를 한 단계 더 들어갑니다. : 스태미나 소비 + 지금까지의 방문 던전 갯수 1 증가
        visited[j] = 0;                             // 현재 던전을 방문한 처리를 되돌립니다.
      }
    }
  }
}



console.log(solution(80, [[80, 20], [50, 40], [30, 10]]));
