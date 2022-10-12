var plusOne = function (digits) {
  if (digits[digits.length - 1] === 9) {
    let flag = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i] += 1;
        flag = 1;
        break;
      } else {
        digits[i] = 0;
      }
    }
    console.log(flag);
    if (flag === 0) {
      digits.unshift(1);
    }
  } else {
    digits[digits.length - 1] += 1;
  }
  return digits;
};

let res = plusOne([9]);
console.log(res);
