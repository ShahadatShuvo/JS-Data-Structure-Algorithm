/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  let reverse = String(x).split("").reverse().join("");
  if (str === reverse) return true;
  return false;
};
