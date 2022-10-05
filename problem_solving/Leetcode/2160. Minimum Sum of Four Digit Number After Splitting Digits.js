var minimumSum = function (num) {
  let arr = String(num).split("");
  arr.sort((a, b) => a - b);
  let p1 = Number(arr[0] + arr[2]);
  let p2 = Number(arr[1] + arr[3]);
  return p1 + p2;
};

let res = minimumSum(4009);
console.log(res);
