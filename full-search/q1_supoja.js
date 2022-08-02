function findAllOccurrence(array, target) {
  let indexes = [], i = -1;
  while ((i = array.indexOf(target, i+1)) != -1){
    indexes.push(i);
  }
  return indexes.sort();
}


function solution(answers) {

  // [i] 번째 수포자가 찍는 패턴
  const patterns = [
    [],                         // [0] 번째 자리 값은 dummy
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  // [i] 번째 수포자가 맞춘 정답 수
  let counter = [-1, 0, 0, 0];  // [0] 번째 자리 값은 dummy

  // 문제들의 정답을 순회하면서 각 수포자들이 해당 정답을 맞췄는지 확인
  for (let i = 0 ; i < answers.length ; i++) {

    // [j] 번째 수포자
    for (let j = 1 ; j <= 3 ; j++) {
      counter[j] += Number(answers[i] === patterns[j][i % patterns[j].length]);
    }
  }

  // 문제를 가장 많이 맞춘 수포자 번호 목록을 반환
  return findAllOccurrence(counter, Math.max(...counter));
}


console.log(solution([1, 3, 2]));
// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 3, 2, 4, 2, 4, 4]));
