var mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let str = sentences[i];
    let counter = 1;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === " ") {
        counter++;
      }
    }
    if (counter > max) {
      max = counter;
    }
  }
  return max;
};

let res = mostWordsFound([
  "please wait",
  "continue to fight",
  "continue to win",
]);
console.log(res);
