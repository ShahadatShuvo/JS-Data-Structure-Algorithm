// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  //   let sum = 0;
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

// [6]recursiveRange(3)
// return 3 + [3]recursiveRange(2)
//              return 2 + [1]recursiveRange(1)
//                            return 1 + [0]recursiveRange(0)
//                                            0

// function recursiveRange(num) {
//   let sum = 0;

//   function makeSum(num) {
//     if (num === 0) {
//       console.log(sum);
//       return sum;
//     }
//     sum += num;
//     console.log(sum);
//     num--;
//     console.log(num);
//     return makeSum(num);
//   }
//   //   console.log(makeSum(num));
//   return makeSum(num);
// }

let res = recursiveRange(3);

console.log(res);
