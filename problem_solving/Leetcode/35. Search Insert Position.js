var searchInsert = function (nums, target) {
  let mid = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      if (nums[mid - 1] < target) {
        return mid;
      }
      right = mid - 1;
    } else if (nums[mid] < target) {
      if (nums.length === mid + 1) {
        return mid + 1;
      }
      if (nums[mid + 1] > target) {
        return mid + 1;
      }
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return mid;
};

let res = searchInsert([1, 3, 5, 6], 4);
console.log(res);
