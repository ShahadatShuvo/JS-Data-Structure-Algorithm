var missingNumber = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    let isThere = nums.indexOf(i);
    if (isThere === -1) {
      return i;
    }
  }
};

let res = missingNumber([3, 0, 1]);
console.log(res);
