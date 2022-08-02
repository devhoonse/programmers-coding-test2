/*
 * todo : 제대로 이해할 것
 */
const solution = word =>
  [...word].reduce((a, c, i) =>
    a + "AEIOU".indexOf(c) * ~~(781 / 5 ** i) + 1
    , 0
  );

console.log(solution("I"));
console.log(solution("EIO"));
