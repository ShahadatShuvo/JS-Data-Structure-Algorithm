var maxDepth = function (s) {
  let max = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      counter++;
      if (counter > max) {
        max = counter;
      }
    }
    if (s[i] === ")") {
      counter--;
    }
  }
  return max;
};

let res = maxDepth("(1)+((2))+(((3)))");
