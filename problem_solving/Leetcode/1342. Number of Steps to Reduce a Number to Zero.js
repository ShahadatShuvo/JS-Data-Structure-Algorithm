var numberOfSteps = function (num) {
  let counter = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      counter++;
    } else {
      num -= 1;
      counter++;
    }
  }
  return counter;
};

let res = numberOfSteps(8);

console.log(res);
