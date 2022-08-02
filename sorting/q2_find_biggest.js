function solution(numbers) {
  const mapped = numbers.map(number => String(number));
  const sorted = mapped.sort((a, b) => (Number(b+a) - Number(a+b)));
  const answer = sorted.join('');

  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
