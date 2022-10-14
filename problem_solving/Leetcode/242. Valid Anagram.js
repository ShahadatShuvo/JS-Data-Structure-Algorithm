var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let freq1 = {};
  let freq2 = {};
  for (let i = 0; i < s.length; i++) {
    freq1[s[i]] = (freq1[s[i]] || 0) + 1;
    freq2[t[i]] = (freq2[t[i]] || 0) + 1;
  }
  for (key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
};

let res = isAnagram("anagram", "nagaram");
console.log(res);
