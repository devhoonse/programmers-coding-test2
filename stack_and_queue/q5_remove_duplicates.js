function solution(arr) {

  // 결과를 담을 배열입니다.
  const result = [];

  // arr 배열 내에 더 이상 꺼낼 아이템이 없을 때까지 아이템을 앞에서부터 차례로 꺼내며 순회합니다.
  while (arr.length > 0) {
    const current = arr.shift();

    // 바로 이전 값과 같은 경우에는 값을 결과 배열에 추가하지 않습니다.
    if (current === result.slice(-1)[0])
      continue;

    // 바로 이전 값과 다른 경우에는 값을 결과 배열에 추가합니다.
    result.push(current);   // 결과 배열에 현재 값을 추가합니다.
  }

  // 결과를 반환합니다.
  return result;
}


function solution2(arr)
{
  return arr.filter((val,index) => val !== arr[index+1]);
}


console.log(solution(	[1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
