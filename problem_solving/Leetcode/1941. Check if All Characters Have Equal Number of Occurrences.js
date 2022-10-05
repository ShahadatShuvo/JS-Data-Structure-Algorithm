var areOccurrencesEqual = function (s) {
  let frequencyObj = {};
  for (let i = 0; i < s.length; i++) {
    frequencyObj[s[i]] = (frequencyObj[s[i]] || 0) + 1;
  }
  let checker = frequencyObj[s[0]];
  let temp = 0;
  for (key in frequencyObj) {
    if (frequencyObj[key] !== checker) {
      temp = 0;
      break;
    }
    temp = 1;
  }
  if (temp === 1) {
    return true;
  } else {
    return false;
  }
};

let res = areOccurrencesEqual("abacbc");
console.log(res);
