/*
* fixme: 테스트 케이스 통과 못하고 있음...
* */
function solution(number, k) {

  // 숫자 목록 문자열을 분해하여 숫자 목록으로 전처리합니다.
  const numbers = number.split('');

  // 모든 가능한 경우들을 담습니다.
  const cases = comb(numbers.length - k, numbers.length)
    .map(value =>
      value
        .trim()
        .split(' ')
        .map(numStr => numbers[Number(numStr)])
        .join('')
    );

  // 모든 가능한 경우들 중에서 가장 큰 값을 문자열로 변환한 후 반환합니다.
  return String(Math.max(
    ...cases.map(numberCase => Number(numberCase))
  ));

  /**
   * 모든 가능한 조합 경우의 수들을 반환합니다.
   * 출처 : https://rosettacode.org/wiki/Combinations#Imperative
   * @param {number} c  추출할 갯수
   * @param {number} n  모집단 갯수
   * @return {Array<string>}   공백 문자로 구분된 조합 케이스    ex) n=5,c=3 => "0 1 3 "
   */
  function comb(c, n) {
    let s = [];
    for (let u = 0 ; u < 1 << n ; u++)
      if (bitcount(u) === c)
        s.push(bitprint(u))
    return s.sort();

    function bitprint(u) {
      let s = "";
      for (let n = 0 ; u ; ++n, u >>= 1)
        if (u & 1) s += `${n} `;
      return s;
    }

    function bitcount(u) {
      let n;
      for (n = 0 ; u ; ++n, u = u & (u - 1));
      return n;
    }
  }

  /**
   * array 배열에서 k 개 값을 삭제하는 모든 경우의 수들을 DFS 로 탐색하여 cases 배열에 추가합니다.
   * @param {Array<string>} array   자신이 가진 값들 중 k 개를 삭제해야 하는 배열
   * @param {number}        k       배열 내에서 더 삭제해야 하는 갯수
   * @return {undefined}             반환 값이 없습니다. solution 함수 블록의 cases 배열에 값을 바로 추가합니다.
   */
  function removeElement(array, k) {

    // 더 이상 빼야 할 문자가 없을 경우, 현재 배열을 새 경우의 수로 추가하고, 함수를 종료합니다.
    if (k === 0) {
      cases.push(array);
      return;
    }

    // 전달받은 array 에서 각 자리들을 제외한 배열과  DFS 로 탐색해 들어갑니다.
    for (let i = 0 ; i < array.length ; i++)
      removeElement(array.filter((value, index) => index !== i), k - 1);
  }
}


console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
