var replaceElements = function (arr) {
  let res = [];
  let current = 0;
  while (current < arr.length) {
    let largest = arr[current + 1];
    for (let i = current + 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    res.push(largest);
    current++;
  }
  res[res.length - 1] = -1;
  return res;
};

let res = replaceElements([400]);
console.log(res);
