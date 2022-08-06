function solution(routes) {

  // 차량들의 이동 경로를 도착 지점 기준 오름차순으로 정렬합니다.
  routes.sort(([_enterA, outA], [_enterB, outB]) => outA - outB);

  // 카메라를 기록합니다.
  let lastCamera = -Infinity;
  let cameras = [];

  // 각 차량들의 이동경로를 하나씩 확인합니다.
  for (let route of routes) {

    // 진입 지점과 이탈 지점을 확인합니다.
    const [enterRoute, outRoute] = route;

    // 마지막에 설치된 카메라가 현재 차량의 진입시점보다 앞에 있을 경우,
    // 카메라에 해당 차량이 잡히지 않으므로, 이 차량을 잡기 위해 카메라를 추가해야 합니다.
    if (lastCamera < enterRoute) {
      lastCamera = outRoute;    // 카메라 설치 위치는 현재 차량의 이탈 지점에 설치합니다. (Greedy Solution)
      cameras.push(outRoute);   // 카메라 설치 위치 목록에 추가합니다.
    }
  }

  // 필요한 모든 카메라 설치 위치의 갯수를 반환합니다.
  return cameras.length;
}

console.log(solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]]));
