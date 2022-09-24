var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X" || operations[i] === "X--") {
      x--;
    } else {
      x++;
    }
  }
  return x;
};

let res = finalValueAfterOperations(["++X", "++X", "X++"]);
console.log(res);
