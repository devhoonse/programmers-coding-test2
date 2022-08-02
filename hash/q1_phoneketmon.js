function solution(nums) {
  const receivable = nums.length / 2;
  const kinds = [...new Set(nums)];

  return Math.min(receivable, kinds.length);
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
