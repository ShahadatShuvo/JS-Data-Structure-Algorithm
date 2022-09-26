var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let window = 1;
  while (window <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < window + i; j++) {
        sum += arr[j];
      }
      //   sum += " ";
      if (window + i >= arr.length) break;
    }
    // sum += "/ ";
    window += 2;
  }
  return sum;
};

let res = sumOddLengthSubarrays([10, 11, 12]);
console.log(res);
