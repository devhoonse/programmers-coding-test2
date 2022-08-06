function solution(n, lost, reserve) {

  // 여벌이 있는 학생들의 목록, 도난당한 학생들의 목록
  // (도난당한 학생들 중 여벌이 있는 학생들은 아래 두 리스트에 포함되어 있지 않습니다.)
  let lostStudents = lost.filter(student => !reserve.includes(student)).sort();
  let reserveStudents = reserve.filter(student => !lost.includes(student)).sort();


  // 수업에 참여 가능한 학생들 목록을 초기화 합니다.
  let current = Array(n).fill(null)
    .map((_, i) => i + 1)
    .filter(student => !lost.includes(student) || reserve.includes(student))
    .sort();

  //
  while (lostStudents.length > 0 && reserveStudents.length > 0) {
    const lostStudent = lostStudents.shift();

    // 자신의 여벌을 갖고 있는 학생이면, 자신의 여벌의 옷을 입습니다.
    const hasReserve = reserveStudents.indexOf(lostStudent);
    if (hasReserve > -1) {
      reserveStudents.splice(hasReserve, 1);
      current.push(lostStudent);
      continue;
    }

    // 자신의 여벌이 없는 경우, 옆 학생(들)에게서 빌릴 수 있는 지 확인합니다.
    const borrowableCandidates = [lostStudent - 1, lostStudent + 1].filter(student => student > 0);
    for (let borrowableCandidate of borrowableCandidates) {

      // 옆 학생(들)에게서 빌릴 수 있는 지 확인합니다.
      const borrowableStudent = reserveStudents.indexOf(borrowableCandidate);
      if (borrowableStudent > -1) {

        // 해당 학생에게서 여벌 옷을 빌리고, 수업에 참석합니다.
        reserveStudents.splice(borrowableStudent, 1);
        current.push(lostStudent);
        break;
      }
    }
  }

  // 체육복을 가질 수 있는 학생 목록을 반환합니다.
  return current.length;
}


console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(5, [1, 2, 3], [2, 3, 4]));

