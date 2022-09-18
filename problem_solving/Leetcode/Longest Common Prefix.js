// function longestCommonPrefix(strs) {
//   let smallest = strs[0];
//   for (let i = 0; i < strs.length; i++) {
//     const element = strs[i];
//     if (element.length < smallest.length) {
//       smallest = element;
//     }
//   }
//   for (let i = 0; i < strs.length; i++) {
//     // console.log(smallest);
//     let temp = strs[i].slice(0, smallest.length);
//     // console.log(temp);
//     if (temp !== smallest) {
//       //   console.log(false);
//       smallest = smallest.slice(0, smallest.length - 1);
//       i = -1;
//     }
//   }
//   if (smallest.length === 0) return "";
//   return smallest;
// }

// let res = longestCommonPrefix(["reflower", "flow", "flight"]);
// console.log(res);

// let temp = "flow";
// let str = "flight";
// console.log(str.slice(0, temp.length));

var longestCommonPrefix = function (strs) {
  let smallest = strs[0];
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    if (element.length < smallest.length) {
      smallest = element;
    }
  }
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].slice(0, smallest.length);
    if (temp !== smallest) {
      smallest = smallest.slice(0, smallest.length - 1);
      i = -1;
    }
  }
  if (smallest.length === 0) return "";
  return smallest;
};

let res = longestCommonPrefix(["reflower", "flow", "flight"]);
console.log(res);
