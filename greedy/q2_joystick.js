
/**
 * fixme : 테스트 케이스 통과 안됨...
 * @param {string} name    입력해야 하는 이름 문자열
 */
function solution(name) {

  // 각 자리들을 주어진 알파벳으로 만들기 위해 최소로 눌러야 하는 위아래 버튼 수 입니다.
  const upDownCounts = name.split('')
    .map(char => Math.min(...[
      char.charCodeAt(0) - 'A'.charCodeAt(0),       // A, B, C, D, ... 순으로 바꾸는 게 더 빠른 알파벳
      'Z'.charCodeAt(0) - char.charCodeAt(0) + 1    // A, Z, Y, X, ... 순으로 바꾸는 게 더 빠른 알파벳
      ])
    );
  const upDownCount = upDownCounts.reduce(
    (accumulated, current, index) => accumulated + current,
    0
  );

  // 필요한 최소 좌우 방향 이동 횟수입니다.
  let leftRightCount = 0;

  // 현재 커서의 위치를 기록합니다.
  let current = 0;

  // 각 자리들을 입력 완료했는지 여부를 기록하는 배열을 초기화합니다.
  const finished = Array(name.length).fill(false)
    .map((value, index) => upDownCounts[index] === 0);  // A 를 입력해야 하는 자리들은 굳이 방문하지 않아도 됩니다.
  finished[0] = true;                                           // 커서는 처음에는 가장 첫 글자에 위치해 있습니다.

  // 배열에 음수 Index 를 사용하기 위해
  const finishedProxy = makeProxy(finished);

  // 모든 위치들을 입력 완료할 때까지 반복합니다.
  while (!finished.reduce((accumulated, current) => accumulated && current, true)) {

    // 필요한 최소 좌측 방향 이동 횟수입니다.
    let lCount = 1;
    while (finishedProxy[(current - lCount) % name.length])
      lCount++;

    // 필요한 최소 우측 방향 이동 횟수입니다.
    let rCount = 1;
    while (finishedProxy[current + rCount])
      rCount++;

    // rCount 와 lCount 를 비교하여 더 이동 방향이 적은 방향을 선택하여 이동합니다.
    leftRightCount += Math.min(rCount, lCount);
    if (rCount <= lCount)
      current += rCount;
    else
      current -= lCount;
    current %= name.length;
    current += current > 0 ? 0 : name.length;

    // 이동한 위치에 대한 입력 완료 처리를 합니다.
    finished[current] = true;
  }

  // 결과 값을 반환합니다.
  return upDownCount + leftRightCount;


  /**
   * 전달받은 배열에 대해 음수 index 를 사용할 수 있도록 하는 Proxy 객체를 생성합니다.
   * @param {Array<any>} array   프록시를 잡고자 하는 배열 객체
   * @return {Array<any>}        프록시가 적용된 배열 객체
   */
  function makeProxy(array) {
    return new Proxy(array, {
      get(target, prop) {
        if (!isNaN(prop)) {
          prop = parseInt(prop, 10);
          if (prop < 0) {
            prop += target.length;
          }
        }
        return target[prop];
      }
    })
  }
}

// console.log(solution("JEROEN"));
console.log(solution(	"JAN"));
