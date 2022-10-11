var numberOfPairs = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
        nums.splice(i, 1);
        nums.splice(j - 1, 1);
        i = 0;
        j = 0;
      }
    }
  }
  let res = [];
  res.push(counter);
  res.push(nums.length);
  return res;
};

let res = numberOfPairs([1, 3, 2, 1, 3, 2, 2]);
console.log(res);
