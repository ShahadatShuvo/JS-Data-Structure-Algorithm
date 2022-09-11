// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// Linear Search Method - O O(n)

// function search(arr, query) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === query) {
//       return i;
//     }
//   }
//   return -1;
// }

// const res = search([1, 2, 3, 4, 5, 6], 11);

// console.log(res);

// Complexity of this solution is O(N)

function search(arr, val) {
  let min = 0,
    max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const res = search([1, 2, 3, 4, 5, 6], 4);

console.log(res);

// Time Complexity - Log(N) - Binary Search! follows divide and conquer pattern
