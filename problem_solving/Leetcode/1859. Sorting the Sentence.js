var sortSentence = function (s) {
  let arr = s.split(" ");
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let slice = arr[i];
    let index = slice[slice.length - 1];
    let word = slice.substring(0, slice.length - 1);
    sortedArr[index - 1] = word;
  }
  return sortedArr.join(" ").toString();
};

let res = sortSentence("Myself2 Me1 I4 and3");

console.log(res);
