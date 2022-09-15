// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 1) return base;

  return base * power(base, exponent - 1);
  // 5 * power(5, 2)
  // 5 * 5 * power(5, 1)
  // return 5*5*5*1
}

let res = power(5, 3);
console.log(res);
