var groupAnagrams = function (strs) {
  let dupliceate = [...strs];
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let arr = word.split("");
    arr.sort();
    word = arr.join("").toString();
    strs[i] = word;
  }
  let size = 0;
  let resArr = [];
  while (size < strs.length) {
    let temp = [];
    let flag = "";
    for (let i = 0; i < strs.length; i++) {
      if (!temp.length && strs[i] !== 1) {
        temp.push(dupliceate[i]);
        flag = strs[i];
        strs[i] = 1;
      } else {
        if (strs[i] === flag && strs[i] !== 1) {
          temp.push(dupliceate[i]);
          strs[i] = 1;
        }
      }
    }
    size += temp.length;
    resArr.push(temp);
  }
  return resArr;
};

let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res);
