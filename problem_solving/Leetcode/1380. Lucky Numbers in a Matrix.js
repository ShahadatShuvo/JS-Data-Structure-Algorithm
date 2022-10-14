var luckyNumbers = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let arr = [...matrix[i]];
    let min = Infinity;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
    let idx = arr.indexOf(min);
    let max = -Infinity;
    for (let p = 0; p < matrix.length; p++) {
      if (matrix[p][idx] > max) {
        max = matrix[p][idx];
      }
    }
    if (min === max) return [min];
  }
  return [];
};

let res = luckyNumbers([
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
]);

console.log(res);
