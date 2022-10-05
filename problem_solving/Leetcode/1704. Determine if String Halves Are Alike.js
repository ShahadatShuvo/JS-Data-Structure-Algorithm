var halvesAreAlike = function (s) {
  s = s.toLowerCase();
  let len = s.length / 2;
  let c1 = 0;
  let c2 = 0;
  for (let i = 0; i < len; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      c1++;
    }
  }
  for (let i = len; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      c2++;
    }
  }
  if (c1 === c2) {
    return true;
  } else {
    return false;
  }
};

let res = halvesAreAlike("book");
console.log(res);
