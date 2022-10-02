var balancedStringSplit = function (s) {
  let L = 0;
  let R = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      R++;
    } else {
      L++;
    }
    if (L === R) {
      counter++;
    }
  }
  return counter;
};

let res = balancedStringSplit("RLRRRLLRLL");
console.log(res);
