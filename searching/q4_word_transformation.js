

/*
 * BFS 방식 풀이
 */
function solution(begin, target, words) {

  // 탐색할 대상을 관리할 큐입니다. 초기에는 시작점 1 개만 넣어둡니다.
  const queue = [begin];

  // 각 단어별로 조사 여부를 기록하기 위한 배열입니다.
  const visitArr = new Array(words.length).fill(false);

  // 탐색에 필요한 보조 변수들입니다.
  let currentWord;              // 큐에서 꺼내서 현재 탐색 중인 단어입니다.
  let ctrlCount = 0;            // 현재까지 탐색한 depth 깊이 갯수를 카운트합니다.
  let currentDepthRemain = 1;   // 현재 탐색 중인 depth 의 탐색을 완료하기까지 앞으로 몇 개의 단어를 더 꺼내야 하는지를 카운트합니다.

  // 큐에 더 이상 탐색할 대상이 없을 때까지 계속합니다.
  while(queue.length > 0) {

    // 큐에서 단어를 하나 꺼내옵니다.
    currentWord = queue.shift();

    // 현재 탐색 중인 depth 의 탐색을 완료하기까지 남은 단어의 갯수를 1 차감합니다.
    currentDepthRemain--;

    // 현재 단어에서 변경 가능한 각 단어별로 순회합니다.
    for (let [wordIndex, word] of getAdjacent(currentWord, words)) {

      // 우리가 찾으려던 단어를 만났습니다. 지금까지 탐색한 depth 깊이의 갯수에 1 을 더해서 반환합니다.
      if (word === target)
        return ++ctrlCount;

      // 이미 조사한 적이 있는 단어일 경우에는 탐색을 다시 진행하지 않습니다.
      if (visitArr[wordIndex] === true)
        continue;

      // 아직 조사한 적이 없는 단어일 경우에는 탐색 대상에 추가합니다.
      visitArr[wordIndex] = true;
      queue.push(word);
    }

    // 현재 탐색 중인 depth 의 탐색을 모두 완료했을 경우에 실행합니다.
    if (currentDepthRemain === 0) {
      ctrlCount++;                        // 현재까지 탐색한 depth 깊이 갯수를 1 증가시킵니다.
      currentDepthRemain = queue.length;  // 다음 depth 의 탐색을 완료하기 위해 앞으로 queue.length 개의 단어를 꺼내야 합니다.
    }
  }

  // BFS 탐색을 진행해 보았지만, target 단어를 만나지 못했습니다.
  // target 단어를 만들 수 있는 방법이 없음을 의미하므로 0 을 반환합니다.
  return 0;

  /*
   * current 단어에서 변경 가능한 인접 단어들을 알려줍니다.
   */
  function* getAdjacent(current) {

    // words 집합 내 각 단어들을 하나씩 순회합니다.
    for (let i = 0 ; i < words.length ; i++) {

      // current 와 비교할 단어입니다.
      const word = words[i];

      // current 와 다른 글자 갯수를 집계합니다.
      let count = 0;
      for (let j = 0 ; j < current.length ; j++)
        count += Number(current[j] !== word[j]);

      // 순회 중인 단어가 current 와 정확히 1 글자만 차이나는 단어일 경우에만 포함시킵니다.
      if (count === 1)
        yield [i, word];
    }
  }
}


console.log(solution(	"hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
