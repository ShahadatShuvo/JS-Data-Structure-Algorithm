var divideArray = function (nums) {
  if (nums.length % 2 !== 0) return false;
  let frequencyObj = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyObj[nums[i]] = (frequencyObj[nums[i]] || 0) + 1;
  }
  let temp = 1;
  for (key in frequencyObj) {
    if (frequencyObj[key] % 2 !== 0) {
      temp = 0;
      break;
    }
  }
  if (temp === 1) {
    return true;
  } else {
    return false;
  }
};

let res = divideArray([3, 2, 3, 2, 2, 2]);
console.log(res);
