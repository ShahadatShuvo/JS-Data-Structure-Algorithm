// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// function same(arr1, arr2) {
//   // length of both arrays must be same
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     let squared = arr1[i] * arr1[i];
//     let flag = 1;
//     for (let j = 0; j < arr2.length; j++) {
//       if (squared === arr2[j]) {
//         arr2.splice(j, 1);
//         flag = 1;
//         break;
//       } else {
//         flag = 0;
//       }
//     }
//     if (flag === 0) return false;
//   }
//   return true;
// }

// let output = same([5, 2, 5], [25, 25, 7]);

// console.log(output);

// Complexity == O(n^2)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    let squared = arr1[i] * arr1[i];
    frequencyCounter1[squared] = (frequencyCounter1[squared] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }

  console.log(frequencyCounter1); // { 0: 1, 4: 2, 9: 1, 16: 1 }
  console.log(frequencyCounter2); // { 0: 1, 4: 2, 9: 1, 16: 1 }

  for (let i = 0; i < arr2.length; i++) {
    if (frequencyCounter1[arr2[i]] !== frequencyCounter2[arr2[i]]) return false;
  }
  return true;
}

let output = same([0, 2, 3, 2, 4], [0, 4, 4, 16, 9]);

console.log(output);

// Note: Complexity of this solution is O(n)
