var sumOfUnique = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
        temp = 0;
      }
    }
    if (temp === 1) {
      arr.push(nums[i]);
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let res = sumOfUnique([1, 2, 3, 2]);
console.log(res);
