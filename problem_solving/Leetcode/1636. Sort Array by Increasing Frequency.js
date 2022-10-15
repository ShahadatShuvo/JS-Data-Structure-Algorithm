var frequencySort = function (nums) {
  let freqObj = {};
  for (let i = 0; i < nums.length; i++) {
    freqObj[nums[i]] = (freqObj[nums[i]] || 0) + 1;
  }
  freqObj = Object.entries(freqObj).sort((a, b) => a[1] - b[1]);
  let arr = [];
  // for (let i = 0; i < freqObj.length - 1; i++) {
  //   if (
  //     freqObj[i][1] === freqObj[i + 1][1] &&
  //     Number(freqObj[i][0]) < Number(freqObj[i + 1][0])
  //   ) {
  //     // let temp = freqObj[i + 1][0];
  //     // freqObj[i + 1][0] = freqObj[i][0];
  //     // freqObj[i][0] = temp;
  //   }
  // }
  // freqObj = freqObj.map((a, b) => b[] - a[0]);
  console.log(freqObj);
  for (let i = 0; i < freqObj.length; i++) {
    let num = freqObj[i][1];
    while (num > 0) {
      arr.push(Number(freqObj[i][0]));
      num--;
    }
  }
  return arr;
};

let res = frequencySort([3, 8, 7, -7, 5, 3, -7]);
console.log(res);
