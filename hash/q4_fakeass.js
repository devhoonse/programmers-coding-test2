function solution(clothes) {

  // 옷 종류별로 옷들의 목록을 정리합니다.
  // { 옷 종류 : [옷 이름 1, 옷 이름 2, ...] }
  const clotheMap = clothes.reduce((accumulated, clothe, id) => {   // 입력받은 옷들을 하나씩 순회합니다.

    // 현재 옷 정보로부터 이름과 종류를 파악합니다.
    const [clotheName, clotheKind] = clothe;

    // 옷 종류별 옷 목록 맵을 업데이트 합니다.
    accumulated.set(clotheKind, [
      ...accumulated.get(clotheKind) || [],
      clotheName
    ]);

    // 현재까지의 업데이트 결과를 반환합니다.
    return accumulated;
  }, new Map());

  // 조건에 따라 조합 가능한 위장 경우의 수를 계산을 시작합니다.
  let answer = 1;

  // 옷 종류별 옷 목록 매핑을 토대로
  // 조합 경우의 수 = (1 번 옷) * (2 번 옷) * .... * (N 번 옷)
  [...clotheMap].forEach(([_clotheKind, clotheList]) => {
    const clotheKindCount = 1   // 이 종류의 옷을 입지 않는 경우
      + clotheList.length;      // 이 종류의 옷을 입는 경우, 한 벌을 골라야 함
    answer *= clotheKindCount;  // 이 종류의 옷을 고려한 경우의 수를 전체 경우의 수에 반영합니다.
  });

  // 스파이는 최소한 한 종류의 옷은 입기 때문에, 아무 옷도 입지 않는 경우의 수 1 은 빼줘야 합니다.
  answer -= 1;

  // 정답을 반환합니다.
  return answer;
}


console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));

