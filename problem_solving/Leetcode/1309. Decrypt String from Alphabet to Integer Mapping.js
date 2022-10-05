var freqAlphabets = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let resStr = "";
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      temp = Number(s[i - 2] + s[i - 1]);
      resStr += alphabet[temp - 1];
    } else {
      if (s[i + 1] === "#" || s[i + 2] === "#") {
        continue;
      } else {
        temp = Number(s[i]);
        resStr += alphabet[temp - 1];
      }
    }
  }
  return resStr;
};

let res = freqAlphabets("1326#");
console.log(res);
