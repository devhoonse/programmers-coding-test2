

// 주어진 맵 내에서 갈 수 있는 방향들을 정의합니다.
// 'DIRECTION_NAME': ( Y , X )
const VECTOR = [
  ['UP', [-1, 0]],
  ['DOWN', [1, 0]],
  ['LEFT', [0, -1]],
  ['RIGHT', [0, 1]]
];


function solution(maps) {

  // 맵의 크기를 파악합니다.
  const GAME_MAP_YLEN = maps.length;
  const GAME_MAP_XLEN = maps[0].length;

  // 맵 내에 각 위치로 도달하기까지의 최단 걸음 수를 기록할 배열을 초기화합니다.
  // (방문이 불가능한 타일은 끝까지 -1 로 남아야 하므로, 모든 타일들의 값을 -1 로 초기화합니다.)
  const minimumStepCount = Array(GAME_MAP_YLEN).fill(null).map(value => Array(GAME_MAP_XLEN).fill(-1));
  minimumStepCount[0][0] = 1;   // (Y=0, X=0) 지점에서 출발하기 때문에, 1 로 초기화합니다.

  // BFS 탐색을 위한 QUEUE 로 사용할 배열을 초기화합니다.
  const queue = [];
  queue.push([0, 0]);           // (Y=0, X=0) 지점에서 출발하기 때문에, QUEUE 에 우선 넣어 둡니다.

  // BFS 탐색을 수행합니다. 더 이상 방문할 수 있는 인접 타일이 없을 때까지 수행합니다.
  while (queue.length > 0) {

    // 다음 탐색 대상 위치 정보를 확인합니다.
    const current = queue.shift();          // FIFO 방식으로 다음 탐색 위치를 꺼내옵니다.
    const [currentY, currentX] = current;   // 다음 탐색 위치의 (Y, X) 좌표 위치를 확인합니다.

    // 현재 위치에 오기까지 걸어온 최소 발걸음 수를 확인합니다.
    const currentSteps = minimumStepCount[currentY][currentX];

    // 현재 위치에서 갈 수 있는 4 방향을 모두 확인합니다.
    for (const [_directionName, [gradientY, gradientX]] of VECTOR) {

      // 맵의 Y 좌표계를 벗어나는 위치는 갈 수 없으므로, 탐색하지 않고 넘어갑니다.
      const nextY = currentY + gradientY;
      if (!(-1 < nextY && nextY < GAME_MAP_YLEN))
        continue;

      // 맵의 X 좌표계를 벗어나는 위치는 갈 수 없으므로, 탐색하지 않고 넘어갑니다.
      const nextX = currentX + gradientX;
      if (!(-1 < nextX && nextX < GAME_MAP_XLEN))
        continue;

      // 갈 수 있는 위치이지만 이미 확인된 위치인 경우, 탐색하지 않고 넘어갑니다.
      if (minimumStepCount[nextY][nextX] > -1)
        continue;

      // 갈 수 있는 위치이고 아직 확인되지 않은 위치일 경우,
      if (maps[nextY][nextX] > 0) {
        minimumStepCount[nextY][nextX] = currentSteps + 1;    // 다음 위치까지의 최단 거리 = 현재 위치까지의 최단 거리 + 1
        queue.push([nextY, nextX]);                           // 다음 탐색 대상 큐에 등록합니다.
      }
    }
  }

  // 맵의 (n, m) 위치까지의 최단 경로 걸음 수를 반환합니다.
  return minimumStepCount[GAME_MAP_YLEN - 1][GAME_MAP_XLEN - 1];
}


console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));
console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]));
