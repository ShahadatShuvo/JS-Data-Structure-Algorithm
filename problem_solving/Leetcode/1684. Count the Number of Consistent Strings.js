var countConsistentStrings = function (allowed, words) {
  let frequencyCounter = {};
  for (let i = 0; i < allowed.length; i++) {
    frequencyCounter[allowed[i]] = (frequencyCounter[allowed[i]] || 0) + 1;
  }
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let temp = 0;
    for (let j = 0; j < word.length; j++) {
      if (!frequencyCounter[word[j]]) {
        console.log(word[j]);
        temp = 0;
        break;
      }
      temp = 1;
    }
    if (temp === 1) {
      counter++;
      temp = 0;
    }
  }
  return counter;
};

let res = countConsistentStrings("abc", [
  "a",
  "b",
  "c",
  "ab",
  "ac",
  "bc",
  "abc",
]);
console.log(res);
