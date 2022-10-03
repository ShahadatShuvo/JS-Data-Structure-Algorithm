var countAsterisks = function (s) {
  let temp = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      temp++;
      if (temp >= 2) {
        temp = 0;
      }
    }
    if (!temp) {
      str += s[i];
    }
  }
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      counter++;
    }
  }
  return counter;
};

let res = countAsterisks("yo|uar|e**|b|e***au|tifu|l");
console.log(res);
