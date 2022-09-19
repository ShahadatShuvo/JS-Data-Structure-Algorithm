// // Fibonacci Series
// 0,1,1,2,3,5,8,13,21,34,55,89,144......

// base = base + (base + 1);
// let arr = [];
// arr[0] = 0;
// arr[1] = 1;
// for (let i = 2; i <= 10; i++) {
//     arr[i] = arr[i-1] + arr[i-2];
// }
// console.log(arr);

function fibonacci(stage) {
  if (stage == 0) return 0;
  if (stage == 1) return 1;

  let pointer1 = 0;
  let pointer2 = 1;
  let sum = 0;
  function makeSum(stage) {
    if (stage === 1) return sum;
    sum = pointer1 + pointer2;
    pointer1 = pointer2;
    pointer2 = sum;
    stage--;
    return makeSum(stage);
  }
  return makeSum(stage);
}

let res = fibonacci(1);

console.log(res);

// function fib(n) { // 5
//   if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }
