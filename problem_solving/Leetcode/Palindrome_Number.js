function isPalindrome(x) {
  let str = String(x);
  let reverse = String(x).split("").reverse().join("");
  console.log(str);
  if (str === reverse) return true;
  return false;
}

console.log(isPalindrome(-121));
