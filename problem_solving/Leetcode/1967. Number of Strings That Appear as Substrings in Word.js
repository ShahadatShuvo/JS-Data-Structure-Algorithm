var numOfStrings = function (patterns, word) {
  let counter = 0;
  for (let i = 0; i < patterns.length; i++) {
    const str = patterns[i];
    for (let j = 0; j < word.length; j++) {
      if (str[0] === word[j]) {
        let substr = word.substring(j, j + str.length);
        if (substr === str) {
          counter++;
          break;
        }
      }
    }
  }
  return counter;
};

let res = numOfStrings(["a", "abc", "bc", "d"], "abc");
console.log(res);
