function solution(numbers) {

  // 문자열로 주어진 숫자 목록을 하나씩 쪼개서 숫자 자료형으로 전처리합니다.
  const numberArray = numbers.split('').map(value => Number(value));

  // 배열 가능한 모든 경우의 수들을 파악합니다.
  let cases = [];
  for (let r = 1 ; r <= numberArray.length ; r++) {
    cases = cases.concat(
      permutation(numberArray, r).map(value => Number(value.join('')))
    );
  }

  // 중복되는 숫자들을 제거한 후, 그 중 소수인 것들만 추출합니다.
  cases = [...new Set(cases)]
    .filter(number => isPrime(number))
    .sort();

  // 위에서 구한 소수 목록의 갯수를 반환합니다.
  return cases.length;

  /*
  * 입력받은 숫자가 소수인지 여부를 반환합니다.
  * */
  function isPrime(number) {

    // 0 혹은 1 을 입력받은 경우 소수가 아닙니다.
    if ([0, 1].includes(number))
      return false;

    // 탐색 범위를 설정합니다. (2 ~ Number 전체 범위를 모두 탐색할 필요가 없습니다.)
    const searchRange = Math.max(   // 다음 2개 값들 중 큰 값까지만 탐색하면 됩니다.
      number / 2,            //   1) number 의 절반
      Math.sqrt(number)             //   2) number 의 제곱근
    );

    // 탐색 범위 내의 숫자들을 하나씩 순회합니다.
    for (let denominator = 2 ; denominator <= searchRange ; denominator++ ) {

      // 나누어 떨어지는 숫자를 있으면 소수가 아닙니다. false 를 반환하고 탐색을 종료합니다.
      if (number % denominator === 0)
        return false;
    }

    // 나누어 떨어지는 숫자가 없으므로 소수입니다. true 를 반환합니다.
    return true;
  }

  /*
  * 주어진 배열 중 몇 개를 선택하여 나열하는 경우들을 반환합니다.
  * 출처 : https://twinkite.tistory.com/entry/%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9Permutation-Combination-Javascript
  * */
  function permutation(arr, num){
    const res = [];
    if(num === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
      const permutations = permutation(rest, num-1);
      const attach = permutations.map((permutation) => [v, ...permutation]);
      res.push(...attach);
    })
    return res;
  }
}

console.log(solution("17"));
console.log(solution("011"));
