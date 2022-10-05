var smallestEvenMultiple = function (n) {
  if (n % 2 === 0) {
    return n;
  } else {
    return n * 2;
  }
};

let res = smallestEvenMultiple(5);
console.log(res);
