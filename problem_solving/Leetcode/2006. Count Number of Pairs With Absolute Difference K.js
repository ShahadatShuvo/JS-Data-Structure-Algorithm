var countKDifference = function (nums, k) {
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        counter++;
      }
    }
  }
  return counter;
};

let res = countKDifference([1, 3], 3);
console.log(res);
