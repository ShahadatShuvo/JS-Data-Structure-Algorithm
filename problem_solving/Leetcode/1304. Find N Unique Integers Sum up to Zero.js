var sumZero = function (n) {
  let arr = [];
  if (n === 1) {
    arr.push(0);
  } else {
    let temp = 1;
    if (n % 2 == 0) {
      while (arr.length < n) {
        arr.push(temp);
        arr.push(-temp);
        temp++;
      }
    } else {
      let temp = 1;
      arr.push(0);
      while (arr.length < n) {
        arr.push(temp);
        arr.push(-temp);
        temp++;
      }
    }
  }
  return arr;
};

let res = sumZero(1);
console.log(res);
