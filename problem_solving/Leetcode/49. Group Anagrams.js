var groupAnagrams = function (strs) {
  let resultArr = [];
  let tempArr = [];
  console.log(tempArr.length);
  while (strs.length > 0) {
    tempArr = [];
    for (let i = 0; i < strs.length; i++) {
      let currentWord = strs[i];
      if (tempArr.length === 0) {
        tempArr.push(currentWord);
        strs.splice(i, 1);
        i--;
      } else {
        let prevWord = tempArr[0];
        if (prevWord.length === currentWord.length) {
          let currentFreq = {};
          let prevFreq = {};
          for (let j = 0; j < currentWord.length; j++) {
            currentFreq[currentWord[j]] =
              (currentFreq[currentWord[j]] || 0) + 1;
            prevFreq[prevWord[j]] = (prevFreq[prevWord[j]] || 0) + 1;
          }
          let flag = 1;
          for (key in currentFreq) {
            if (currentFreq[key] !== prevFreq[key]) {
              flag = 0;
              break;
            }
          }
          if (flag === 1) {
            tempArr.push(currentWord);
            strs.splice(i, 1);
            i--;
          }
        }
      }
    }
    resultArr.push(tempArr);
  }
  return resultArr;
};

let res = groupAnagrams(["no", "on", "ten", "ent"]);
console.log(res);
