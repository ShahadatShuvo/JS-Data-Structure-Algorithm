var mergeTwoLists = function (list1, list2) {
  console.log(list1);
  let newArr = [...list1, ...list2];
  let sortedAr = newArr.sort((a, b) => a - b);
  return sortedAr;
};

// var mergeTwoLists = function (list1, list2) {
//   let arr = [];
//   let i = 0;
//   let j = 0;
//   while (i < list1.length && j < list2.length) {
//     if (list1[i] < list2[j]) {
//       arr.push(list1[i]);
//       i++;
//     } else {
//       arr.push(list2[j]);
//       j++;
//     }
//   }

// };
let res = mergeTwoLists([1, 2, 4], [1, 3, 4]);
