var findDifference = function (nums1, nums2) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < nums1.length; i++) {
    let check = nums2.includes(nums1[i]);
    let temp = arr1.includes(nums1[i]);
    if (!check && !temp) {
      arr1.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let check = nums1.includes(nums2[i]);
    let temp = arr1.includes(nums2[i]);

    if (!check && !temp) {
      arr2.push(nums2[i]);
    }
  }
  return [arr1, arr2];
};

let res = findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
console.log(res);
