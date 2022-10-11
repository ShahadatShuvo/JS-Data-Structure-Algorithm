var repeatedNTimes = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};

let res = repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]);
console.log(res);
