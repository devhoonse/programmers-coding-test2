function solution(priorities, location) {

  // 주어진 우선순위 배열의 각 값들의 문서 번호를 기억하기 위해 별도의 배열을 생성했습니다.
  const prioritiesWithLocation = priorities.map((value, loc) => [value, loc]);

  // 출력 이력을 기록할 배열입니다.
  const printHistory = [];

  // 더 이상 출력할 문서가 없을 때까지 반복합니다.
  while (prioritiesWithLocation.length > 0) {

    // 문서 대기열에서 가장 앞에 있는 문서를 꺼냅니다.
    const docFromQueue = popDocument();

    // 꺼낸 문서의 우선 순위가 다른 문서들 보다 높을 경우, 문서를 출력합니다.
    if (isThisTheMostPriority(docFromQueue))
      printHistory.push(docFromQueue);

    // 꺼낸 문서의 우선 순위보다 높은 우선 순위의 문서가 대기열에 있는 경우, 출력하지 않고 대기열의 맨 끝으로 보냅니다.
    else
      prioritiesWithLocation.push(docFromQueue);
  }

  // 문서 번호별 인쇄 순서에서 location 문서가 몇 번째로 출력되었는지를 반환합니다.
  return 1 + printHistory.findIndex(([_priority, loc]) => loc === location);

  /*
  * 문서 doc 가 현재 문서 대기열 내에서 가장 높은 우선순위를 갖는지 여부를 확인합니다.
  */
  function isThisTheMostPriority(doc) {

    // 문서 doc 의 우선순위 값과 문서번호를 확인합니다.
    const [priority, _loc] = doc;

    // 다른 아이템들 중 우선순위가 더 높은 아이템이 있는 경우 false 를 반환합니다.
    for (let [otherPriority, _otherLoc] of prioritiesWithLocation)
      if (priority < otherPriority)
        return false;

    // 우선순위가 더 높은 아이템이 없는 경우 true 를 반환합니다.
    return true;
  }

  /*
  * 문서 대기열에서 가장 앞에 있는 문서를 꺼냅니다.
  */
  function popDocument() {
    return prioritiesWithLocation.splice(0, 1)[0];
  }
}


console.log(solution([2, 1, 3, 2], 2));
console.log(solution(	[1, 1, 9, 1, 1, 1], 0));
