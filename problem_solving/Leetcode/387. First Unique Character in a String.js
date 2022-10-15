var firstUniqChar = function (s) {
  let freqObj = {};
  for (let i = 0; i < s.length; i++) {
    freqObj[s[i]] = (freqObj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freqObj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
let res = firstUniqChar("loveleetcode");
console.log(res);
