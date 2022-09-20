// Insertion Sort
// Builds up the sort by gradually creating a larger left half which is always sorted

// Insertion Sort Pseudocode

// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (j = i; j >= 1; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  console.log(arr);
  return arr;
}

let res = insertionSort([5, 3, 4, 1, 2]);
console.log(res); // [ 1, 2, 3, 4, 5 ]
