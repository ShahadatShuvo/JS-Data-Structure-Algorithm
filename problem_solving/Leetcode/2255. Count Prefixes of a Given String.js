var countPrefixes = function (words, s) {
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    let len = words[i].length;
    let slice = s.substring(0, len);
    if (words[i] === slice) {
      counter++;
    }
  }
  return counter;
};

let res = countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc");
console.log(res);
