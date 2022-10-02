var defangIPaddr = function (address) {
  let arr = address.split("");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") {
      str += "[.]";
    } else {
      str += arr[i];
    }
  }
  return str;
};

let res = defangIPaddr("1.1.1.1");
console.log(res);
