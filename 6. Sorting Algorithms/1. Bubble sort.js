// BubbleSort
// A sorting algorithm where the largest values bubble up to the top!

// BubbleSort Pseudocode

// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Check Swappin.js file for this line..
      }
    }
  }
  console.log(arr);
  return arr;
}

let res = bubbleSort([5, 3, 4, 1, 2]);
console.log(res); // [ 1, 2, 3, 4, 5 ]
