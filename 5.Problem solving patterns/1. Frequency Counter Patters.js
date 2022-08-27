// Example: Write a function called same, whics accepts two arrays.The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false(must be same frequency)

// solution-1:

let arr1 = [1, 2, 3],
  arr2 = [4, 1, 9];

function same(a1, a2) {
  let sort1 = a1.sort(function (a, b) {
    return a - b;
  });
  let sort2 = a2.sort(function (a, b) {
    return a - b;
  });
  if (sort1.length !== sort2.length) {
    return "false";
  }
  for (let i = 0; i < sort1.length; i++) {
    if (sort2[i] !== sort1[i] * sort1[i]) {
      return "false";
    }
  }
  return "true";
}

console.log(same(arr1, arr2));
