/*
* fixme: 테스트케이스 통과 못함...
* */
function solution(arr) {



  // while (true) {
  //
  // }

  // DFS 를 수행한 결과값 중 최대값을 반환합니다.
  return DFS(arr);

  /*
  * 주어진 배열로부터 모든 가능한 괄호 구성 시나리오들을 탐색해 들어가기 위한 DFS 를 수행하는 함수입니다.
  * */
  function DFS(arr) {

    //
    if (arr.length === 0)
      return -Infinity;

    // 배열 내 원소가 하나만 남았을 경우, 하나의 괄호 구성 시나리오에 대한 계산이 끝났다는 의미이므로, 값을 반환합니다.
    if (arr.length === 1)
      return arr.shift();

    // 이번에 전달받은 배열을 가지고 구성 가능한 시나리오별 연산 결과값을 담을 배열입니다.
    let cache = [];

    // 피벗(괄호를 적용할 자리)을 하나씩 옮겨가면서 조사합니다.
    for (let pivot = 1 ; pivot < arr.length ; pivot += 2) {
      cache = cache.concat(DFS([                                   // DFS 로 탐색해 들어간 결과를 cache 배열에 추가합니다.
        arr.slice(0, pivot -1),                                     // 괄호를 적용 안한 나머지
        // [...arr.slice(pivot - 1, pivot + 2)],
        eval(`${arr[pivot - 1]} ${arr[pivot]} ${arr[pivot + 1]}`),  // 괄호를 적용하고 연산하는 자리
        arr.slice(pivot + 2)                                        // 괄호를 적용 안하는 자리
      ]));
    }

    // 이번 조사에서의 조사값 배열을 반환합니다.
    return cache;
  }
}

console.log(solution(["4"]));
console.log(solution(["2", "-", "3"]));
console.log(solution(	["1", "-", "3", "+", "5", "-", "8"]));
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]));
