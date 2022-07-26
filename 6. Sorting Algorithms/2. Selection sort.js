// Selection Sort
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// Selection Sort Pseudocode

// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
  return arr;
}

let res = selectionSort([5, 3, 4, 1, 2]);

console.log(res); // [ 1, 2, 3, 4, 5 ]
