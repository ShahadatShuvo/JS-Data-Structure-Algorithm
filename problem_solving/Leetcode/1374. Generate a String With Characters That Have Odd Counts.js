var generateTheString = function (n) {
  let str = "";
  if (n % 2 === 0) {
    for (let i = 0; i < n - 1; i++) {
      str += "a";
    }
    str += "b";
  } else {
    for (let i = 0; i < n; i++) {
      str += "a";
    }
  }
  return str;
};

let res = generateTheString(4);
console.log(res);
