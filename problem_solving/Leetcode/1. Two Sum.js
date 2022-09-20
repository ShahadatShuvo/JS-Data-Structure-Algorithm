// Given an numsay of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let mainArr = [];
  for (let i = 0; i < nums.length; i++) {
    mainArr.push(nums[i]);
  }
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      break;
    }
  }
  let res = [];
  res[0] = mainArr.indexOf(nums[left]);
  mainArr[res[0]] = undefined;
  res[1] = mainArr.indexOf(nums[right]);
  return res;
};
