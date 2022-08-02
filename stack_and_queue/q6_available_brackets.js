
const OPEN_BRACKET = '(';     // 여는 괄호
const CLOSED_BRACKET = ')';   // 닫는 괄호

/*
* 출처 : https://stackoverflow.com/questions/52969755/how-to-check-the-sequence-of-opening-and-closing-brackets-in-string
* */
function solution(s){

  // 괄호 처리 과정을 기록하기 위한 배열입니다.
  // 최종적으로 이 배열에는 올바르게 짝지어지지 못한 괄호 문자들만 남게 됩니다.
  const holder = [];

  // 주어진 문자열을 한 글자씩 순회합니다.
  for (let letter of s) {

    // 여는 괄호를 만났을 경우에 holder 에 추가합니다. -> 나중에 닫는 괄호를 만나면 지워줘야 한다는 의미
    if (letter === OPEN_BRACKET)
      holder.push(letter);

    // 닫는 괄호를 만났을 경우에는 앞서 추가된 여는 괄호가 있는지 여부에 따라 처리가 달라집니다.
    else if (letter === CLOSED_BRACKET) {

      // holder 에 담겨있는 마지막 괄호 문자가 여는 괄호였을 경우, 이 여는 괄호를 닫아주는 의미에서 삭제 처리합니다.
      if (holder[holder.length - 1] === OPEN_BRACKET)
        holder.splice(-1,1); // if so, remove it

      // holder 에 담겨있는 마지막 괄호 문자가 여는 괄호가 아닐 경우에는, 이 괄호로 닫아줄 수 있는 여는 괄호가 없다는 의미가 됩니다.
      else {
        holder.push(letter);  // holder 에 현재 문자인 닫는 괄호를 추가합니다. (잘못 쓰여진 닫는 괄호라는 의미이므로)
        break;                // 이미 주어진 문자 s 는 괄호가 잘못 짝지어졌따는 의미이므로, 더 조사할 필요가 없습니다.
      }
    }
  }

  // 올바르게 짝지어지지 못한 괄호 문자들의 갯수가 0 인지 여부를 반환합니다. false 일 경우, 괄호 짝이 제대로 지어지지 않았다는 의미입니다.
  return holder.length === 0;
}


console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
