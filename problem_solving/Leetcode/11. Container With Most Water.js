var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = -Infinity;
  while (start < end) {
    let min;
    if (height[start] <= height[end]) {
      min = height[start];
    } else {
      min = height[end];
    }
    let waterAmount = (end - start) * min;
    if (waterAmount > max) {
      max = waterAmount;
    }

    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
};

let res = maxArea([1, 1]);
console.log(res);
