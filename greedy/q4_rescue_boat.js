
function solution(people, limit) {

  // 무인도에 갇힌 사람들의 몸무게를 오름차순으로 정렬합니다.
  people.sort((a, b) => a - b);

  // 남은 사람들 중 몸무게가 가장 적은 사람이 몇 명까지 보트에 태워졌는지를 기록합니다.
  let minimumPersonIndex = 0;

  // 몸무게가 가장 작은 사람과 함께 태울 수 있는 사람이 있는지를
  // 몸무게가 가장 무거운 사람부터 내림차순으로 확인합니다.
  for (let otherPersonIndex = people.length - 1 ; otherPersonIndex > minimumPersonIndex ; otherPersonIndex--) {

    // 몸무게가 가장 작은 사람과 함께 태울 수 있으면 태워 보냅니다.
    if (people[minimumPersonIndex] + people[otherPersonIndex] <= limit)
      minimumPersonIndex++;   // 태워보냈으므로 그 다음 사람이 가장 몸무게가 작은 사람이 됩니다.
  }

  // 동승 가능한 인원들은 2명씩 같은 보트에 태워 보냈으므로
  // 동승 처리된 가장 몸무게가 적은 사람들 수를 전체 인원 수에서 빼면 보트 수가 됩니다.
  return people.length - minimumPersonIndex;
}


console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
