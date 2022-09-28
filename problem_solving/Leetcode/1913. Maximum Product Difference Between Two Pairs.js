var maxProductDifference = function (nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  let res =
    sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2] -
    sortedArr[0] * sortedArr[1];
  return res;
};

let res = maxProductDifference([4, 2, 5, 9, 7, 4, 8]);
console.log(res);
