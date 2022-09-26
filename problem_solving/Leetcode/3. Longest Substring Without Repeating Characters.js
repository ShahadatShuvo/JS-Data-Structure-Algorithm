var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let max = 0;
  let count = 0;
  let frequencyObj = {};

  for (let end = 0; end < s.length; ) {
    if (!frequencyObj[s[end]]) {
      frequencyObj[s[end]] = true;
      count++;
      end++;
    } else {
      frequencyObj[s[start]] = undefined;
      count--;
      start++;
    }
    if (count > max) {
      max = count;
    }
  }

  return max;
};

let res = lengthOfLongestSubstring("dvdf");
console.log(res);
