function productOfArray(arr) {
  if (arr.length === 0) return NaN;

  let result = 1;
  function makeMulti(arr) {
    if (arr.length === 0) return result;

    result *= arr[arr.length - 1];
    arr.pop(); //O(1)
    return makeMulti(arr);
  }
  let temp = makeMulti(arr);
  return temp;
}

let res = productOfArray([1, 2, 3, 10]);

console.log(res);
