var twoOutOfThree = function (nums1, nums2, nums3) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let n2 = nums2.indexOf(nums1[i]);
    let n3 = nums3.indexOf(nums1[i]);
    if (n2 !== -1 || n3 !== -1) {
      let temp = res.includes(nums1[i]);
      if (!temp) res.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let n1 = nums1.indexOf(nums2[i]);
    let n3 = nums3.indexOf(nums2[i]);
    if (n1 !== -1 || n3 !== -1) {
      let temp = res.includes(nums2[i]);
      if (!temp) res.push(nums2[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    let n1 = nums1.indexOf(nums3[i]);
    let n2 = nums2.indexOf(nums3[i]);
    if (n1 !== -1 || n2 !== -1) {
      let temp = res.includes(nums3[i]);
      if (!temp) res.push(nums3[i]);
    }
  }
  return res;
};

let res = twoOutOfThree([1], [1], [2]);
console.log(res);
