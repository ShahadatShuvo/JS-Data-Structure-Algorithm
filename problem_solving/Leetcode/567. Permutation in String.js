var checkInclusion = function (s1, s2) {
  let frequencyS1 = {};
  for (let i = 0; i < s1.length; i++) {
    frequencyS1[s1[i]] = (frequencyS1[s1[i]] || 0) + 1;
  }
  let start = 0;
  for (let end = s1.length - 1; end < s2.length; end++) {
    let currentFrequency = {};
    console.log(start);
    for (let i = start; i <= end; i++) {
      currentFrequency[s2[i]] = (currentFrequency[s2[i]] || 0) + 1;
    }
    let temp = 0;
    for (key in frequencyS1) {
      if (frequencyS1[key] === currentFrequency[key]) {
        temp = 1;
      } else {
        temp = 0;
        break;
      }
    }
    if (temp === 1) {
      return true;
    }
    start++;
  }
  return false;
};

let res = checkInclusion("ab", "a");
console.log(res);
