var restoreString = function (s, indices) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("").toString();
};

let res = restoreString("abc", [0, 1, 2]);
console.log(res);
