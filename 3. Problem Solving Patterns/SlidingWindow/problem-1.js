// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// A naive solution
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// const result = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
// console.log(result); // 10

// Time Complexity - O(N^2)

// Refactor;
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; // tempSum = 1 + 2 = 3
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // tempSum = 3 - 1 + 5 = 8
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

const result = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
console.log(result); // 10
// Time Complexity - O(N)
