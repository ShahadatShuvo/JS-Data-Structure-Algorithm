var reorganizeString = function (s) {
  let frequencyObj = {};
  let sortedArr = [];
  let resStr = "";

  if (s.length === 0) return resStr;

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
  var j = 1;
  console.log(sortedArr);

  let left = {
    index: 0,
    key: sortedArr[0][0],
    val: sortedArr[0][1],
  };

  let right = {
    index: 1,
    key: sortedArr[1][0],
    val: sortedArr[1][1],
  };

  while (left.index < sortedArr.length && right.index < sortedArr.length) {
    if (left.val && resStr[resStr.length - 1] !== left.key) {
      resStr += left.key;
      left.val--;
      console.log(left);
      if (left.index + 1 === sortedArr.length) break;
      if (!left.val) {
        let temp = right.index + 1;
        left.index = right.index + 1;
        left.key = sortedArr[temp] ? sortedArr[temp][0] : undefined;
        left.val = sortedArr[temp] ? sortedArr[temp][1] : undefined;
      }
    }
    if (right.val && resStr[resStr.length - 1] !== right.key) {
      resStr += right.key;
      right.val--;
      console.log(right);

      if (!right.val) {
        let temp = right.index + 1;
        right.index = right.index + 1;
        right.key = sortedArr[temp] ? sortedArr[temp][0] : undefined;
        right.val = sortedArr[temp] ? sortedArr[temp][1] : undefined;
      }
    }
  }
  console.log(resStr);

  console.log(left);
  console.log(right);
  if (right.val) {
    for (let i = 0; i < right.val; i++) {
      if (i === 0) {
        resStr = right.key + resStr;
      } else {
        resStr =
          resStr.substring(0, i + 1) + right.key + resStr.substring(i + 1);
      }
    }
  }
  return resStr;
};

let res = reorganizeString("aabbc");

console.log(res);
