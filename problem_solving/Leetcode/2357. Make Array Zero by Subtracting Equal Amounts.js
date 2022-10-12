var minimumOperations = function (nums) {
  let counter = 0;
  let min = Infinity;
  while (min > 0) {
    let temp = 0;
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        temp = 1;
      } else {
        flag = 1;
        if (nums[i] < min) min = nums[i];
      }
    }
    if (flag === 0 && temp === 1) {
      min = 0;
    }
    if (min === 0) break;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        nums[i] -= min;
      }
    }
    min = Infinity;
    counter++;
  }
  return counter;
};

let res = minimumOperations([5, 3, 2, 1]);
console.log(res);
