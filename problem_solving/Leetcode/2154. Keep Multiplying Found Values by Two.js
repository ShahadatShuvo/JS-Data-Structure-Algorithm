var findFinalValue = function (nums, original) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) {
      original *= 2;
      i = -1;
    }
  }
  return original;
};

let res = findFinalValue([5, 3, 6, 1, 12], 3);
console.log(res);
