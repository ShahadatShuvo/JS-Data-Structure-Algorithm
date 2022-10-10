var countPairs = function (nums, k) {
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        let sum = i * j;
        if (sum % k === 0) {
          counter++;
        }
      }
    }
  }
  return counter;
};

let res = countPairs([3, 1, 2, 2, 2, 1, 3], 2);
console.log(res);
