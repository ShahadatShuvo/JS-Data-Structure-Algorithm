var mergeSimilarItems = function (items1, items2) {
  let arr = [];
  for (let i = 0; i < items1.length; i++) {
    let flag = 0;
    for (let j = 0; j < items2.length; j++) {
      if (items1[i][0] === items2[j][0]) {
        let temp = [items1[i][0], items1[i][1] + items2[j][1]];
        arr.push(temp);
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      let temp = [items1[i][0], items1[i][1]];
      arr.push(temp);
    }
  }
  return arr;
};
let res = mergeSimilarItems(
  [
    [1, 1],
    [4, 5],
    [3, 8],
  ],
  [
    [3, 1],
    [1, 5],
  ]
);

console.log(res);
