var checkString = function (s) {
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      temp = 1;
    }
    if (s[i] === "a") {
      if (temp === 1) {
        temp = 0;
        break;
      }
      temp = 2;
    }
  }
  if (temp === 0) {
    return false;
  } else {
    return true;
  }
};

let res = checkString("aaabba");
console.log(res);
