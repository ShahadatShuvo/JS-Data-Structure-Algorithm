var heightChecker = function (heights) {
  let arr = [...heights];
  let counter = 0;
  heights.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== heights[i]) {
      counter++;
    }
  }
  return counter;
};

let res = heightChecker([1, 1, 4, 2, 1, 3]);
console.log(res);
