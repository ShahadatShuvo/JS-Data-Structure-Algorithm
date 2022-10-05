var sortString = function (s) {
  let arr = s.split("");
  arr = arr.sort();

  let current = 0;
  let str = "";
  let len = s.length;
  while (current < len) {
    str += arr[0];
    current++;
    let strASC = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        strASC += arr[i];
        str += arr[i];
        current++;
        if (current >= len) break;
      }
    }
    if (current >= len) break;

    for (let i = 0; i < strASC.length; i++) {
      let index = arr.indexOf(strASC[i]);
      arr.splice(index, 1);
    }

    let strDESC = arr[arr.length - 1];
    str += arr[arr.length - 1];
    current++;
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] !== arr[i + 1]) {
        strDESC += arr[i];
        str += arr[i];
        current++;
        if (current >= len) break;
      }
    }
    if (current >= len) break;

    for (let i = 0; i < strDESC.length; i++) {
      let index = arr.indexOf(strDESC[i]);
      arr.splice(index, 1);
    }
  }
  return str;
};

let res = sortString("aaaabbbbcccc");
console.log(res);
