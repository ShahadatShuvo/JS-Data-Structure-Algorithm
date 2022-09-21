var majorityElement = function (nums) {
  let frequencyObj = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyObj[nums[i]] = (frequencyObj[nums[i]] || 0) + 1;
  }
  console.log(frequencyObj);
  let max = -Infinity;
  let result;
  for (key in frequencyObj) {
    if (frequencyObj[key] > max) {
      result = key;
      max = frequencyObj[result];
    }
  }
  return result;
};

let res = majorityElement([3, 2, 3]);
console.log(res);
