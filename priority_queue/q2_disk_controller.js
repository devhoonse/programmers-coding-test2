

/*
* fixme: 테스트 케이스 통과 못함...
* */
function solution(jobs) {

  // 정렬 이전의 본래 위치를 기억하기 위한 처리입니다.
  jobs = jobs.map((jobInfo, jobNo) => [...jobInfo, jobNo]);


  // 시뮬레이션에 필요한 각 변수들을 준비합니다.
  let seconds = 0;                                        // 전체 작업 소요 시간을 기록합니다.
  let currentJob = null;                                  // 현재 진행중인 작업의 ID 를 기록합니다.
  let currentJobRemaining = 0;                            // 현재 진행중인 작업의 남은 소요 시간을 계산합니다.
  const elapsedTimes = Array(jobs.length).fill(0);  // 각 작업들이 완료되기까지 걸린 시간들을 반환합니다.

  // 작업 대기열 내에 더 이상 작업이 없을 때까지 시뮬레이션을 반복합니다.
  while (jobs.length > 0 || currentJobRemaining > 0) {

    // 작업 대기열이 남아있을 때 작업을 꺼내오는 처리입니다.
    if (jobs.length > 0) {

      // 작업 대기열을 정렬합니다.
      jobs.sort();

      // 작업 대기열 내에서 첫 번째 작업을 확인합니다.
      let firstJob = jobs[0];
      const [inTimeFirstJob, _runTimeFirstJob] = firstJob;

      // 작업 대기열 내 첫 번째 작업 요청이 들어온 상태이고 현재 진행중인 작업이 없으면 작업 시작 처리를 합니다.
      if (inTimeFirstJob <= 0 && currentJobRemaining === 0) {
        firstJob = jobs.splice(0, 1)[0];
        [_, currentJobRemaining, currentJob] = firstJob;
      }
    }

    // 현재 작업의 남은 시간을 1초 감소시킵니다.
    currentJobRemaining--;
    elapsedTimes[currentJob] += 1;

    // 작업 대기열 내 각 작업들의 대기 시간을 1초 감소시키고, 각 작업들이 완료되기까지 소요된
    for (let i = 0 ; i < jobs.length ; i++) {
      if (jobs[i][0]-- <= 0)
        elapsedTimes[jobs[i][2]]++;
    }


    // 전체 작업 소요 시간을 1초 증가시킵니다.
    seconds++;
  }

  // 각 작업들이 대기열에 들어와서부터 완료되기까지의 평균 시간을 반환합니다.
  return elapsedTimes.reduce((acc, cur, index) => (acc + cur), 0) / elapsedTimes.length;
}


console.log(solution([[0, 3], [1, 9], [2, 6]]));
