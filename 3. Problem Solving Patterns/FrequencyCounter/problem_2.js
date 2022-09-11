// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
    frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
  }
  console.log(frequencyCounter1); // { a: 3, n: 1, g: 1, r: 1, m: 1 }
  console.log(frequencyCounter2); // { n: 1, a: 3, g: 1, r: 1, m: 1 }

  for (let i = 0; i < str1.length; i++) {
    if (frequencyCounter1[str1[i]] !== frequencyCounter2[str1[i]]) return false;
  }
  return true;
}

let result = validAnagram("anagram", "nagaram");

console.log(result); // true

// Complexity of this problem O(n)
