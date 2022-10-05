var firstPalindrome = function (words) {
  let palindromic = "";
  for (let i = 0; i < words.length; i++) {
    let reverse = [...words[i]].reverse().join("");
    console.log(reverse);
    if (reverse === words[i]) {
      palindromic = reverse;
      break;
    }
  }
  return palindromic;
};

let res = firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
console.log(res);
