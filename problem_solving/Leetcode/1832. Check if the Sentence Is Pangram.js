var checkIfPangram = function (sentence) {
  if (sentence.length < 25) return false;
  let obj = {};
  for (let i = 0; i < sentence.length; i++) {
    obj[sentence[i]] = (obj[sentence[i]] || 0) + 1;
  }
  let alphabet = "abcdefghijklmnopqrstuvwyz";
  let temp = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (!obj[alphabet[i]]) {
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

let res = checkIfPangram("leetcode");
console.log(res);
