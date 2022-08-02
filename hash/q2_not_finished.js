
let solution = (participant, completion) => participant.find(
  /*
   * 참가자 목록 내에서 찾아야 할 element 가 무엇인지를 정의합니다.
   */
  name => {
    return !completion[name]--;   // 참가자의 이름이 completion 배열 객체 내에 집계되지 않은 이름일 경우에 true 를 반환합니다.
                                  // 참가자의 이름이 completion 배열 객체 내에 집계된 이름일 경우에는 집계 건수를 -1 차감합니다.
  },
  /*
   * thisArg 를 정의하기 위한 자리이지만, this 를 사용하기 위해 쓴 것은 아닙니다.
   * completion 배열 객체 자체 내에 포함된 동명이인 인원 수를 기록하도록 하였습니다. (completion 객체를 변화시킵니다.)
   */
  completion.map(
    name => {                                                 // completion 배열 내에 담겨있는 name 을 하나씩 순회합니다.
      return completion[name] = (completion[name] | 0) + 1;   // completion 배열 객체 내에 해당 name 으로 attribute 를 생성하고 등장 빈도를 집계합니다.
    }
  )
);
// let solution = (_, $) => _.find(
//   _ => !$[_]--,
//   $.map(_ => $[_] = ($[_] | 0) + 1)
// );


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
