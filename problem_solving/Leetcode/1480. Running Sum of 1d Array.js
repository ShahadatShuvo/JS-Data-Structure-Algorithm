var runningSum = function (nums) {
  nums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};

let res = runningSum([1, 2, 3, 4]);
console.log(res);
