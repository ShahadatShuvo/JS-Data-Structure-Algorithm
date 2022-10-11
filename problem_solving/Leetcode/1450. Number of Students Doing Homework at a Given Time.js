var busyStudent = function (startTime, endTime, queryTime) {
  let counter = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      counter++;
    }
  }
  return counter;
};

let res = busyStudent([1, 2, 3], [3, 2, 7], 4);
console.log(res);
