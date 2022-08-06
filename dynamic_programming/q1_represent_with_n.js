
function solution(N, number) {

  console.warn(`\nN : ${N} , number : ${number}`);
  const cache = new Array(9+1).fill(0).map(el => new Set());

  for(let i=1; i<=9; i++){
    console.group(`[${i}]`)
    cache[i].add('1'.repeat(i) * N);

    for (let j=1; j < i; j++) {
      console.group(`(${j}) * (${i-j})`);

      for(const arg1 of cache[j]){
        for(const arg2 of cache[i-j]){
          cache[i].add(arg1+arg2);
          cache[i].add(arg1-arg2);
          cache[i].add(arg1*arg2);
          cache[i].add(arg1/arg2>>0);
        }
      }
      console.groupEnd();
    }
    console.groupEnd();

    if(cache[i].has(number)) return i;
  }
  return -1;
}


console.log(solution(5, 12));
console.log(solution(5, 31168));
