var replaceDigits = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      str += s[i];
    } else {
      let digit = Number(s[i]);
      let prevCharidx = s[i - 1];
      prevCharidx = alphabet.indexOf(prevCharidx);
      str += alphabet[prevCharidx + digit];
    }
  }
  return str;
};

let res = replaceDigits("a1c1e1");
console.log(res);
