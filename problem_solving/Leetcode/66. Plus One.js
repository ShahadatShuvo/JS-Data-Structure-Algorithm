var plusOne = function (digits) {
  let str = digits.join("").toString();
  let num = Number(str) + 1;
  str = String(num);
  return str.split("");
};

let res = plusOne([1, 2, 3]);
console.log(res);
