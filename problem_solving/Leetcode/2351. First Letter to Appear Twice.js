var repeatedCharacter = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let check = arr.indexOf(s[i]);
    if (check === -1) {
      arr.push(s[i]);
    } else {
      return s[i];
    }
  }
};

let res = repeatedCharacter("abccbaacz");
console.log(res);
