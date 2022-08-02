function solution(sizes) {

  // 지갑에 최소로 필요한 가로 너비를 구합니다.
  const minWidth = Math.max(...sizes.map(size => Math.max(...size)));

  // 지갑에 최소로 필요한 세로 높이를 구합니다.
  const minHeight = Math.max(...sizes.map(size => Math.min(...size)));

  // 지갑이 최소로 필요한 사이즈의 면적을 반환합니다.
  return minWidth * minHeight;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution(	[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));
