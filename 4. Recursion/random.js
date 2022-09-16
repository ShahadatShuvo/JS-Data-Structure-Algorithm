// What about big O?
// Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input
// Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory.
// RECURSION
// PROBLEM SET
// POWER
// power(2,4) //16
// power(3,2) //9
// power(3,3) //27

// POWER power( 2 , 4 ) //16 power( 3 , 2 ) //9 power( 3 , 3 ) //27 Write a function which accepts a base an an exponent.  It should return the result of raising the base to that exponent.

function power(base, pow) {
  if (pow === 0) return 1;
  return base * power(base, pow - 1);

  // 2 * power(2, 3)  === 16
  8;
  //      2 * power(2, 2);
  4;
  //          2 * power(2, 1);
  2;
  //                 2 * power(2, 0);
  //                        1
}

let res = power(2, 4);
console.log(res);
