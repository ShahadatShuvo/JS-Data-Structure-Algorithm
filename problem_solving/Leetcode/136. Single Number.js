var singleNumber = function (nums) {
  let frequescyObj = {};
  for (let i = 0; i < nums.length; i++) {
    frequescyObj[nums[i]] = (frequescyObj[nums[i]] || 0) + 1;
  }
  for (key in frequescyObj) {
    if (frequescyObj[key] === 1) {
      return key;
    }
  }
};

let res = singleNumber([4, 1, 2, 1, 2]);
console.log(res);
