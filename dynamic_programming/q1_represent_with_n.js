
function solution(N, number) {

  // N 을 최소 몇 개 사용해야 주어진 number 를 표현할 수 있는지 파악하기 위한 배열입니다.
  // representableNumbers[count] = (N 을 count 개 사용해서 표현할 수 있는 값들의 집합)
  const MAX_COUNT = 10;         // MAX_COUNT 개 이상 사용하는 범위는 탐색하지 않습니다.
  const representableNumbers = new Array(MAX_COUNT + 1).fill(null).map(_val => new Set());

  // N 을 count 개 사용해서 주어진 number 를 표현할 수 있는지 확인합니다.
  for (let count = 1 ; count < representableNumbers.length ; count++) {

    // N 을 count 개 사용해서 표현할 수 있는 숫자 중에는 우선 NN...N 이 있습니다.
    representableNumbers[count].add('1'.repeat(count) * N);

    //   N 을          pivot  개 숫자료 표현하는 방법
    // + N 을 (count - pivot) 개 숫자로 표현하는 방법
    // = N 을          count  개 숫자로 표현하는 방법
    for (let pivot = 1 ; pivot < count ; pivot++) {                 //                  pivot 값을 1 ~ count 범위에서 변화시키면서 모든 가능한 범위를 탐색합니다.
      for (const arg1 of representableNumbers[pivot]) {             // (1) N 을          pivot  개 사용하여 표현 가능한 숫자
        for (const arg2 of representableNumbers[count - pivot]) {   // (2) N 을 (count - pivot) 개 사용하여 표현 가능한 숫자
          representableNumbers[count].add(arg1 + arg2);             // 둘에 대한   덧셈을 적용한 결과를 추가합니다.
          representableNumbers[count].add(arg1 - arg2);             // 둘에 대한   뺄셈을 적용한 결과를 추가합니다.
          representableNumbers[count].add(arg1 * arg2);             // 둘에 대한   곱셈을 적용한 결과를 추가합니다.
          representableNumbers[count].add(arg1 / arg2 >> 0);        // 둘에 대한 나눗셈을 적용한 결과를 추가합니다. (나눗셈에서 나머지는 무시된다는 조건에 따라)
        }
      }
    }

    // N 을 count 개 사용해서 주어진 number 를 표현할 수 있으면, count 를 반환하고 함수를 종료합니다.
    if (representableNumbers[count].has(number))
      return count;
  }

  // N 을 사용해서 주어진 number 를 표현할 방법이 없으면 -1 을 반환합니다.
  return -1;
}


console.log(solution(5, 12));
console.log(solution(5, 31168));
