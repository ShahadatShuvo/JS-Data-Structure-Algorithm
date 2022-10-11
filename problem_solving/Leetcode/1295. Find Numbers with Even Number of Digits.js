var findNumbers = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let len = String(nums[i]).length;
    if (len % 2 === 0) {
      counter++;
    }
  }
  return counter;
};

let res = findNumbers([12, 345, 2, 6, 7896]);
console.log(res);
