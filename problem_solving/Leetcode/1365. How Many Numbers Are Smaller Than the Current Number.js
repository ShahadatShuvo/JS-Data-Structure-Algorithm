var smallerNumbersThanCurrent = function (nums) {
  let arr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        counter++;
      }
    }
    arr[i] = counter;
  }
  return arr;
};

let res = smallerNumbersThanCurrent([7, 7, 7, 7]);

console.log(res);
