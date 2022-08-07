/*
* fixme: 테스트케이스 통과 못함...
* */
function solution(arr) {

  // DFS 를 수행한 결과값 중 최대값을 반환합니다.
  return Math.max(...dfsStackVer(arr));

  /**
   * @param {Array<string>} arr
   */
  function dfsStackVer(arr) {

    // 배열에 포함된 연산자들의 갯수를 확인합니다.
    const numberOfOperators = arr.length - 1 >> 2

    // 탐색 중 발견된 모든 케이스들을 담습니다.
    const cases = new Set([]);

    // DFS 탐색에 스택으로 사용할 배열입니다.
    const stack = Array(numberOfOperators).fill(null).map((_value, index) => index + 1);

    // DFS 탐색을 시작합니다.

    while (stack.length > 0) {

    }

    // 탐색 중 발견된 모든 케이스들을 담습니다.
    return cases;
  }

  /*
  * 주어진 배열로부터 모든 가능한 괄호 구성 시나리오들을 탐색해 들어가기 위한 DFS 를 수행하는 함수입니다.
  * */
  function DFS(arr) {

    // 배열 내 원소가 3 개만 남았을 경우, 하나의 괄호 구성 시나리오에 대한 계산이 끝났다는 의미이므로, 값을 반환합니다.
    if (arr.length === 3) {
      const [operandA, operator, operandB] = arr;
      return [eval(`${operandA} ${operator} ${operandB}`)];
    }

    // 배열 내 원소가 5 개만 남았을 경우, 나올 수 있는 경우의 수는 자명하게 2개 뿐입니다.
    if (arr.length === 5) {
      const [operandA, operator1, operandB, operator2, operandC] = arr;
      return [
        eval(`(${operandA} ${operator1} ${operandB}) ${operator2} ${operandC}`),
        eval(`${operandA} ${operator1} (${operandB} ${operator2} ${operandC})`)
      ];
    }

    // 이번에 전달받은 배열을 가지고 구성 가능한 시나리오별 연산 결과값을 담을 배열입니다.
    let cache = [];

    // 피벗(괄호를 적용할 자리)을 하나씩 옮겨가면서 조사합니다.
    for (let pivot = 1 ; pivot < arr.length ; pivot += 2) {
      const applied = [                                   // DFS 로 탐색해 들어간 결과를 cache 배열에 추가합니다.
        ...arr.slice(0, pivot -1),                                     // 괄호를 적용 안한 나머지
        eval(`${arr[pivot - 1]} ${arr[pivot]} ${arr[pivot + 1]}`),  // 괄호를 적용하고 연산하는 자리
        ...arr.slice(pivot + 2)                                        // 괄호를 적용 안하는 자리
      ];
      cache = cache.concat(DFS(applied));
    }

    // 이번 조사에서의 조사값 배열을 반환합니다.
    return cache;
  }
}

console.log(solution(["2", "-", "3"]));
console.log(solution(	["1", "-", "3", "+", "5", "-", "8"]));
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]));
