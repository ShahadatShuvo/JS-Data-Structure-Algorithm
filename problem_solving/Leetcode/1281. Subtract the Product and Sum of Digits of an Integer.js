var subtractProductAndSum = function (n) {
  let str = String(n);
  let prod = 1;
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    prod *= Number(str[i]);
    sum += Number(str[i]);
  }
  return prod - sum;
};

let res = subtractProductAndSum(4421);
console.log(res);
