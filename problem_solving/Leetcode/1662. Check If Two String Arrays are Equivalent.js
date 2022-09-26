var arrayStringsAreEqual = function (word1, word2) {
  let str1 = word1.join("").toString();
  let str2 = word2.join("").toString();
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

let res = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
console.log(res);
