var shuffle = function (nums, n) {
  let arr = [];
  let j = 0;
  for (let i = 0; i < n; i++) {
    arr[j] = nums[i];
    j++;
    arr[j] = nums[n + i];
    j++;
  }
  return arr;
};

let res = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
console.log(res);
