var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < seats.length; i++) {
    total += Math.abs(seats[i] - students[i]);
  }
  return total;
};

let res = minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]);
console.log(res);
