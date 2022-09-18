var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let arr = s.split("");
  let paranthesesObj = {};
  for (let i = 0; i < arr.length; i++) {
    paranthesesObj[arr[i]] = (paranthesesObj[arr[i]] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (paranthesesObj["("] !== paranthesesObj[")"]) {
      return false;
    }
    if (paranthesesObj["{"] !== paranthesesObj["}"]) {
      return false;
    }
    if (paranthesesObj["["] !== paranthesesObj["]"]) {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === ")" || arr[i] == "}" || arr[i] == "]") {
      // all conditions
      if (arr[i] === ")") {
        if (arr[i - 1] === "(") {
          arr.splice(i - 1, 2);
          i = i - 2;
        } else {
          return false;
        }
      }
      if (arr[i] === "}") {
        if (arr[i - 1] === "{") {
          arr.splice(i - 1, 2);
          i = i - 2;
        } else {
          return false;
        }
      }
      if (arr[i] === "]") {
        if (arr[i - 1] === "[") {
          arr.splice(i - 1, 2);
          i = i - 2;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

let res = isValid("(){}}{");
console.log(res);
