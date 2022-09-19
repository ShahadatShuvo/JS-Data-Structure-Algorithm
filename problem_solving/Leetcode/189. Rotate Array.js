var rotate = function (nums, k) {
  let len = nums.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    let temp = i + k;
    if (temp >= len) {
      let x = temp - len;
      arr[x] = nums[i];
    } else {
      arr[temp] = nums[i];
    }
  }
  return arr;
};

let res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(res);
