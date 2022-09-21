var reverseWords = function (s) {
  let arr = s.split("");
  let start = 0;
  let end;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === " ") {
      start = i;
    }

    if (arr[i + 1] === " " || i === arr.length - 1) {
      end = i;
    }

    if (start < end) {
      while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  }
  s = arr.join("").toString();
  return s;
};

let res = reverseWords("Let's take leetcode contest");
console.log(res);
