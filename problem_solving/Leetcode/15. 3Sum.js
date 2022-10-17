var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start < end && mid > start && mid < end) {
    let tempArr = [];
    let sum = nums[start] + nums[mid] + nums[end];
    if (sum === 0) {
      tempArr = [nums[start], nums[mid], nums[end]];
      start++;
      end--;
      mid = start + 1;
    } else if (sum < 0) {
      mid++;
      if (mid >= end) {
        start++;
        mid = start + 1;
      }
    } else {
      mid--;
      if (mid <= start) {
        end--;
        mid = start + 1;
      }
    }
    //hello
    if (tempArr.length === 3) {
      arr.push(tempArr);
    }
  }
  console.log("code");
  return arr;
};

let res = threeSum([1, 2, -2, -1]);
console.log(res);
