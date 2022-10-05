var prefixCount = function (words, pref) {
  let len = pref.length;
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    let slice = words[i].substring(0, len);
    if (slice === pref) {
      counter++;
    }
  }
  return counter;
};

let res = prefixCount(["pay", "attention", "practice", "attend"], "at");
console.log(res);
