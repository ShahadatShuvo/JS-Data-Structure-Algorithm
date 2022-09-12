// this is e test problem of leetcode
function maximumWealth(accounts) {
  let max = -Infinity;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

let res = maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);

console.log(res);
