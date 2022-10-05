var kthDistinct = function (arr, k) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      temp = 1;
      if (j === i) {
        continue;
      } else if (arr[i] === arr[j]) {
        temp = 0;
        break;
      }
    }
    if (temp === 1) {
      unique.push(arr[i]);
    }
  }
  if (k > unique.length) {
    return "";
  } else {
    return unique[k - 1];
  }
};

let res = kthDistinct(["a", "b", "a"], 3);
console.log(res);
