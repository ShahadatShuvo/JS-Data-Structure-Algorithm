// Merge Sort
// It's a combination of two things - merging and sorting!
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

function mergeTwoSortedArray(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
}

let res = mergeTwoSortedArray([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
console.log(res);
