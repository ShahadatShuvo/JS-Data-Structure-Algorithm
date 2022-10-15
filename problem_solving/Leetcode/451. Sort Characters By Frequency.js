var frequencySort = function (s) {
  let freqObj = {};
  for (let i = 0; i < s.length; i++) {
    freqObj[s[i]] = (freqObj[s[i]] || 0) + 1;
  }
  freqObj = Object.entries(freqObj).sort((a, b) => b[1] - a[1]);
  let str = "";
  for (let i = 0; i < freqObj.length; i++) {
    let size = freqObj[i][1];
    while (size > 0) {
      str += freqObj[i][0];
      size--;
    }
  }
  return str;
};

let res = frequencySort("cccccaaadee");
console.log(res);
