// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);
  if (str1.length !== str2.length) return false;

  const frequencyObject1 = {};
  const frequencyObject2 = {};
  for (let i = 0; i < str1.length; i++) {
    frequencyObject1[str1[i]] = (frequencyObject1[str1[i]] || 0) + 1;
    frequencyObject2[str2[i]] = (frequencyObject2[str2[i]] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    if (frequencyObject1[str1[i]] !== frequencyObject2[str1[i]]) return false;
  }
  return true;
}

let res = sameFrequency(182, 281);

console.log(res);
