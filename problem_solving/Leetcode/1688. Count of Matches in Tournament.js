var numberOfMatches = function (n) {
  let match = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      match += n;
    } else {
      n = (n + 1) / 2;
      match += n - 1;
    }
  }
  return match;
};

let res = numberOfMatches(7);

console.log(res);
