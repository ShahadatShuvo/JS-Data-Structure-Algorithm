let str1 = "aaz",
  str2 = "zaa";

function Anagram(str1, str2) {
  let match1 = {};
  let match2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (match1.hasOwnProperty(str1[i])) {
      match1 = { ...match1, [str1[i]]: match1[str1[i]] + 1 };
    } else {
      match1 = { ...match1, [str1[i]]: 1 };
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (match2.hasOwnProperty(str2[i])) {
      match2 = { ...match2, [str2[i]]: match2[str2[i]] + 1 };
    } else {
      match2 = { ...match2, [str2[i]]: 1 };
    }
  }
  console.log(match1);
  console.log(match2);
}

console.log(Anagram(str1, str2));
