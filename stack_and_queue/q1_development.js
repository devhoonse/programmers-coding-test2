


function solution(progresses, speeds) {

  // 배포 이력을 기록할 배열입니다.
  const deployHistory = [];

  // 시뮬레이션은 Queue 에서 모든 작업들이 완료되어 나갈 때까지 계속합니다.
  while (progresses.length > 0) {

    // 시간을 1 증가시키고, 각각의 작업 속도에 맞게 작업을 진척시킵니다.
    progress();

    // 오늘 배포될 수 있는 작업들을 담을 배열입니다.
    const deployed = [];

    // 현재 Queue 의 가장 앞의 작업이 완료되었을 경우,
    while (progresses[0] >= 100) {
      deployed.push(deployFirstIn());   // 작업을 배포하기 위해 작업 Queue 에서 꺼내옵니다.
    }

    // 오늘 배포될 수 있는 작업들이 있는 경우, 배포 이력에 기록합니다.
    if (deployed.length > 0)
      deployHistory.push(deployed)
  }

  // 각 배포마다 몇 건의 기능들을 배포했는지 이력을 반환합니다.
  return deployHistory.map(deployed => deployed.length);

  /*
  * 시간을 1 증가시키고, 각각의 작업 속도에 맞게 작업을 진척시킵니다.
  * */
  function progress() {
    for (let i = 0 ; i < progresses.length ; i++) {
      progresses[i] = progresses[i] + speeds[i];   //
    }
  }

  /*
  * 작업을 배포하기 위해 작업 Queue 에서 꺼내옵니다.
  * */
  function deployFirstIn() {
    speeds.splice(0, 1);              // [0] 번째 작업의 작업 속도 정보를 제거합니다.
    return progresses.splice(0, 1);   // [0] 번째 작업의 진척률 정보를 제거하고 제거된 값을 반환합니다.
  }
}




console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution(	[95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
