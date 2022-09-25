var reorganizeString = function (s) {
  let frequencyObj = {};
  let sortedArr = [];
  let resStr = "";
  for (let i = 0; i < s.length; i++) {
    frequencyObj[s[i]] = (frequencyObj[s[i]] || 0) + 1;
  }
  let max = 0;
  for (key in frequencyObj) {
    if (frequencyObj[key] > max) {
      max = frequencyObj[key];
    }
  }
  let mid = Math.ceil(s.length / 2);

  if (max > mid) return resStr;

  sortedArr = Object.entries(frequencyObj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let j = i + 1;

    if (sortedArr[i][1] <= 0) {
      i = i + 1;
      j = i + 1;
    }
    if (sortedArr[i][1] > 0 && resStr[resStr.length - 1] !== sortedArr[i][0]) {
      resStr += sortedArr[i][0];
      sortedArr[i][1] -= 1;
    }

    if (
      sortedArr[j] &&
      sortedArr[j][1] > 0 &&
      resStr[resStr.length - 1] !== sortedArr[j][0]
    ) {
      resStr += sortedArr[j][0];
      sortedArr[j][1] -= 1;
      i = i - 1;
    }
  }
  if (sortedArr[sortedArr.length - 1][1]) {
    for (let i = 0; i < sortedArr[sortedArr.length - 1][1]; i++) {
      if (i === 0) {
        resStr = sortedArr[sortedArr.length - 1][0] + resStr;
      } else {
        resStr =
          resStr.substring(0, i + 1) +
          sortedArr[sortedArr.length - 1][0] +
          resStr.substring(i + 1);
      }
    }
  }
  return resStr;
};

let res = reorganizeString("aaaaaccbb");

console.log(res);
