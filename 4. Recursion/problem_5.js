function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // [21].concat(collectOddValues([8, 5, 47, 9, 3]));
  // [21].concat(collectOddValues([5, 47, 9, 3]));
  // [21, 5].concat(collectOddValues([47, 9, 3]));
  // [21, 5, 47].concat(collectOddValues([9, 3]));
  // [21, 5, 47, 9].concat(collectOddValues([3]));
  // [21, 5, 47, 9, 3].concat(collectOddValues([]));

  // Result== [21, 5, 47, 9, 3].concat(collectOddValues([]));

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  console.log(newArr);
  return newArr;
}

let res = collectOddValues([21, 8, 5, 47, 9, 3]);
console.log(res); //[21, 5, 47, 9, 3]
