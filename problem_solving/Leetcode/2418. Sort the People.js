var sortPeople = function (names, heights) {
  let Nameobj = {};
  for (let i = 0; i < names.length; i++) {
    Nameobj[heights[i]] = names[i];
  }

  let sortArr = heights.sort((a, b) => b - a);
  let arr = [];
  for (let i = 0; i < sortArr.length; i++) {
    arr.push(Nameobj[sortArr[i]]);
  }
  return arr;
};

let res = sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]);
console.log(res);
