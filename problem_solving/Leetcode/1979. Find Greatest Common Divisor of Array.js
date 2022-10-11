var findGCD = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let gcd = arr[0];
  while (gcd >= 1) {
    if (arr[0] % gcd === 0 && arr[arr.length - 1] % gcd === 0) {
      return gcd;
    }
    gcd--;
  }
};

let res = findGCD([5, 10]);
console.log(res);
