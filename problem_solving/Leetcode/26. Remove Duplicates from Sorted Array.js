var removeDuplicates = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      arr.push(nums[i]);
    }
  }
  nums = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  return nums;
};

let res = removeDuplicates([1, 1, 2]);
console.log(res);
