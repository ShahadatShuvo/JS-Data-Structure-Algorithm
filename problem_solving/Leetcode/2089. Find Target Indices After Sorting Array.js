var targetIndices = function (nums, target) {
  let arr = nums.sort((a, b) => a - b);
  console.log(arr);
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
};

let res = targetIndices([1, 2, 5, 2, 3], 6);
console.log(res);
