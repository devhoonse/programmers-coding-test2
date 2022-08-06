function solution(numbers) {

  // 배열 내 각 숫자 값들을 문자열로 변환합니다.
  const mapped = numbers.map(number => String(number));

  // 배열내 각 문자열들을 다음과 같은 기준으로 정렬합니다.
  // ['62', '10'] => 1062 < 6210 이므로 ['62', '10'] 로 정렬
  // ['01', '34'] => 3401 > 0134 이므로 ['34', '01'] 로 정렬
  const sorted = mapped.sort((a, b) => (Number(b + a) - Number(a + b)));

  // 정렬 결과 배열을 이어 붙여서 문자열을 만듭니다.
  const answer = sorted.join('');

  // 맨 앞 글자가 0 이면 0 으로, 아니면 answer 문자열을 그대로 반환합니다.
  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
