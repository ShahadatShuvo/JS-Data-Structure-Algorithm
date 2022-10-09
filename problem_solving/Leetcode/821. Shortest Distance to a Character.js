var shortestToChar = function (s, c) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let diff = Infinity;
    if (s[i] === c) {
      diff = 0;
    } else {
      let left = i;
      let right = i;
      let temp = i;
      while (s[temp] !== c) {
        if (s[left] === c) {
          diff = i - left;
          temp = left;
          break;
        }
        if (left > 0) {
          left--;
        }
        if (s[right] === c) {
          diff = right - i;
          temp = right;
          break;
        }
        if (right < s.length) {
          right++;
        }
      }
    }
    arr.push(diff);
  }
  return arr;
};

let res = shortestToChar("islxy", "i");
console.log(res);
