var findDisappearedNumbers = function (nums) {
  let arr = [];
  for (let i = 1; i <= nums.length; i++) {
    let temp = nums.includes(i);
    if (temp === false) {
      arr.push(i);
    }
  }
  return arr;
};

let res = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(res);
