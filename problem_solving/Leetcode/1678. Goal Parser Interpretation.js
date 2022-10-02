var interpret = function (command) {
  let arr = command.split("");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "G") {
      str += "G";
    } else if (arr[i] === "(") {
      if (arr[i + 1] === ")") {
        str += "o";
        i++;
      } else {
        str += "al";
        i += 2;
      }
    }
  }
  return str;
};

let res = interpret("G()(al)");
