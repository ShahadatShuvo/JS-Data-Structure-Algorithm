var reversePrefix = function (word, ch) {
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }
  let slice1 = word.substring(0, index + 1);
  let slice2 = word.substring(index + 1);
  let reverse = [...slice1].reverse().join("");
  return reverse + slice2;
};

let res = reversePrefix("abcdefd", "d");
console.log(res);
