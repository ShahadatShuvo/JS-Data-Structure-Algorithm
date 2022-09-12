// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;

  let pointerStr1 = 0;
  let flag = str1.length;
  console.log(pointerStr1);
  for (let i = 0; i < str2.length; i++) {
    if (str1[pointerStr1] === str2[i]) {
      pointerStr1++;
      flag--;
    }
  }
  if (flag === 0) {
    return true;
  } else {
    return false;
  }
}

let res = isSubsequence("abc", "abracadabra");
console.log(res);
