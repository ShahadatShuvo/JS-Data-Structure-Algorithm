var findLength = function (nums1, nums2) {
  let big = [];
  let small = [];
  if (nums1.length >= nums2.length) {
    big = nums1;
    small = nums2;
  } else {
    big = nums2;
    small = nums1;
  }
  let counter = 0;
  let max = 0;
  for (let i = 0; i < big.length; i++) {
    let p = i;
    for (let j = 0; j < small.length; j++) {
      console.log(p);
      if (big[p] === small[j]) {
        p++;
        counter++;
        if (counter > max) {
          max = counter;
        }
        console.log(max);
      } else {
        counter = 0;
        p = i;
      }
    }
    counter = 0;
    console.log(max);
  }
  return max;
};

let res = findLength(
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
);
console.log(res);
