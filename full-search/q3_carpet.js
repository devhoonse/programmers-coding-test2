function solution(brown, yellow) {

  // borderHeight 는 3 이하일 수 없으므로 3 에서부터 1 씩 증가시켜가며 탐색합니다.
  for (let borderHeight = 3 ; ; borderHeight++) {

    // borderLength = 2*(height - 1) + 2*(width - 1)    ::: ㄴ ㄱ 모양을 합친 걸 생각하면 됨
    const borderWidth = (brown / 2) - borderHeight + 2;

    // yellowHeight, yellowWidth 는 둘레 정보에 의해 확정적으로 결정된다
    const yellowHeight = borderHeight - 2;
    const yellowWidth = borderWidth - 2;

    // yellow 영역의 블록 갯수가 일치하면 이게 우리가 찾던 정답이다.
    if (yellow === yellowHeight * yellowWidth)
      return [borderWidth, borderHeight];
  }
}


console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
