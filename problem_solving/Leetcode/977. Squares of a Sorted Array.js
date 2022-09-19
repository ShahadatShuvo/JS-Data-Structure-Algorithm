var sortedSquares = function (nums) {
  let squares = [];
  squares[0] = nums[0] * nums[0];
  for (let i = 1; i < nums.length; i++) {
    squares[i] = nums[i] * nums[i];
  }
  squares.sort((a, b) => a - b);
  return squares;
};

let res = sortedSquares([-7, -3, 2, 3, 11]);
console.log(res);
