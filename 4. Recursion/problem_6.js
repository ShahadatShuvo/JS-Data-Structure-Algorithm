// [7, 9, 11, 17];

function retunAllOddValues(arr) {
  let oddArrList = [];

  function checkOdd(arr) {
    if (arr.length === 0) {
      // base case
      return oddArrList;
    }
    if (arr[0] % 2 !== 0) {
      oddArrList.push(arr[0]);
    }
    arr.shift();
    return checkOdd(arr);
  }
  return checkOdd(arr);
}

// [8, 7, 9, 11, 16, 17, 18];
// [7, 9, 11, 16, 17, 18]; oddArr[7]
// [9, 11, 16, 17, 18]; oddArr[7, 9]
// [11, 16, 17, 18]; oddArr[7, 9, 11]
// [16, 17, 18]; oddArr[7, 9, 11]
// [16, 17, 18]; oddArr[7, 9, 11]

let res = retunAllOddValues([8, 7, 9, 11, 16, 17, 18]);

console.log(res);

// factorial(5) = 5*4*3*2*1 = 120
// factorial(4) = 4*3*2*1 = 24
// factorial(1) = 1
// factorial(0) = 1

function factorial(num) {
  // base case
  if (num === 0) {
    return 1;
  }
  // operation
  return num * factorial(num - 1);
  // 5 * [24]factorial(4)  <- bottom
  //      4 * [6]factorial(3)
  //             3 * [2]factorial(2)
  //                      2 * [1]factorial(1)
  //                              1 * [1]factorial(0)
  //                                      1 <- top
}

let output = factorial(5);
console.log(output);

// for (let i = 0; i <= num; i++) {
//     factorial *= i;

// }
