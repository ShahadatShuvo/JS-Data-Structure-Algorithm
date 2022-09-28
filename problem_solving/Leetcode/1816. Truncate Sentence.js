var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  let str = arr[0];
  for (let i = 1; i < k; i++) {
    str += " " + arr[i];
  }
  return str;
};

let res = truncateSentence("Hello how are you Contestant", 4);
console.log(res);
