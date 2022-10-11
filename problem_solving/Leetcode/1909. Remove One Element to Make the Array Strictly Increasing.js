var canBeIncreasing = function (nums) {
  let arr = [...nums];
  arr.sort((a, b) => a - b);
  let counter = 0;
  console.log(arr);
  console.log(nums);
  for (let i = 0; i < arr.length; i++) {
    if (nums[i] !== arr[i]) {
      counter++;
    }
  }
  if (counter > 2) {
    return false;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
};

let res = canBeIncreasing([105, 924, 32, 968]);
console.log(res);
