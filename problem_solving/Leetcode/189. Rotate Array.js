var rotate = function (nums, k) {
  let len = nums.length;
  let arr = [];
  if (k > len) {
    k = k % len;
  }
  for (let i = 0; i < len; i++) {
    let temp = i + k;
    if (temp >= len) {
      let x = temp - len;
      arr[x] = nums[i];
    } else {
      arr[temp] = nums[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  return nums;
};

let res = rotate([1, 2], 5);
console.log(res);
