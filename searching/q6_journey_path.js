
function solution(tickets) {

  // 가능한 경로 목록을 여기에 담습니다.
  let answer = [];

  // 가능한 경로 목록들을 탐색을 수행합니다. -> DFS
  DFS(tickets, "ICN", ["ICN"]);

  // 가능한 경로 목록들 중 알파벳 순서상으로 가장 먼저 나타나는 경로 1 개만 반환합니다.
  return answer.sort()[0];


  /*
   * DFS 를 수행합니다.
   */
  function DFS(remainingTickets, current, journeyHistory) {

    // 더 이상 소비할 티켓이 없다는 것은 하나의 여행 경로를 찾았다는 의미입니다. 그 동안의 여행 경로를 목록에 추가합니다.
    if (remainingTickets.length === 0)
      answer.push(journeyHistory);

    // current 에서 출발하는 모든 티켓들을 하나씩 순회합니다.
    for (let [i, [_fromLocation, toLocation]] of getAvailableDestinations(remainingTickets, current))
      // 재귀적으로 수행합니다.
      DFS(
        remainingTickets.filter((_ticket, index) => index !== i),   // 현재 티켓은 소비된 상태로 전달합니다.
        toLocation,                                                         // 탐색 출발지점은 이 티켓의 목적지부터입니다.
        journeyHistory.concat(toLocation)                                   // 여행 경로 이력에 이 티켓의 목적지를 추가합니다.
      );
  }


  /*
   * current 지점에서 갈 수 있는 목적지 목록을 알려주는 generator 입니다.
   */
  function* getAvailableDestinations(remainingTickets, current) {

    // 각 티켓들을 하나씩 순회합니다.
    for (let i = 0 ; i < remainingTickets.length ; i++) {

      // 각 티켓의 출발 지점, 도착 지점 파악합니다.
      const ticket = remainingTickets[i];
      const [fromLocation, toLocation] = ticket;

      // current 를 출발 지점으로 하는 티켓일 경우, 이 티켓의 목적지를 generator 의 결과물로 포함시킵니다.
      if (fromLocation === current)
        yield [i, ticket];
    }
  }
}


console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
