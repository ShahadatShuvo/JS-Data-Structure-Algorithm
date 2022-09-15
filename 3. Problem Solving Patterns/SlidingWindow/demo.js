// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

function search(arr, query) {
  // [6, 12, 18, 22]
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    console.log(middle);
    if (arr[middle] < query) {
      min = middle + 1;
    } else if (arr[middle] > query) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}

let res = search([1, 2, 3, 4, 5, 6, 12, 18, 22], 6);

console.log(res);
