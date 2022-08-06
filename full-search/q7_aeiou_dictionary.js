/*
 * todo : 제대로 이해할 것
 */
function solution3(words) {
  return words.split('')
    .reduce(
      (accumulated, current, index) =>
        accumulated + [781, 156, 31, 6, 1][index] * ['A', 'E', 'I', 'O', 'U'].indexOf(current) + 1
      , 0
    );
}


const solution2 = word =>
  [...word].reduce((a, c, i) =>
    a + "AEIOU".indexOf(c) * ~~(781 / 5 ** i) + 1
    , 0
  );


function solution(word) {

  // AEIOU 사전에 나타나는 단어 순서를 파악합니다.
  const AEIOU_DICTIONARY = aeiouBuilder();

  // AEIOU 사전에서 word 단어가 몇 번째에 나타나는지를 반환합니다.
  return AEIOU_DICTIONARY.indexOf(word) + 1;

  /**
   * AEIOU 사전에 나타나는 단어 순서를 반환합니다.
   */
  function aeiouBuilder() {

    // AEIOU 문자가 사전 내에서 나타나는 순서 배열입니다.
    const AEIOU = 'AEIOU'.split('');

    // AEIOU 사전에 나타나는 단어 순서를 담을 배열입니다.
    const dictionary = [];

    // AEIOU 사전에 나타나는 단어 순서를 기록합니다.
    for (let i1 = 0 ; i1 < AEIOU.length ; i1++) {
      dictionary.push(AEIOU[i1]);
      for (let i2 = 0 ; i2 < AEIOU.length ; i2++) {
        dictionary.push(AEIOU[i1] + AEIOU[i2]);
        for (let i3 = 0 ; i3 < AEIOU.length ; i3++) {
          dictionary.push(AEIOU[i1] + AEIOU[i2] + AEIOU[i3]);
          for (let i4 = 0 ; i4 < AEIOU.length ; i4++) {
            dictionary.push(AEIOU[i1] + AEIOU[i2] + AEIOU[i3] + AEIOU[i4]);
            for (let i5 = 0 ; i5 < AEIOU.length ; i5++) {
              dictionary.push(AEIOU[i1] + AEIOU[i2] + AEIOU[i3] + AEIOU[i4] + AEIOU[i5]);
            }
          }
        }
      }
    }

    // AEIOU 사전에 나타나는 단어 순서를 반환합니다.
    return dictionary;
  }
}





console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
