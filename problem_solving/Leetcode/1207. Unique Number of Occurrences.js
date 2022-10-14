var uniqueOccurrences = function (arr) {
  let frequencyobj = {};
  for (let i = 0; i < arr.length; i++) {
    frequencyobj[arr[i]] = (frequencyobj[arr[i]] || 0) + 1;
  }
  let counter = [];
  for (key in frequencyobj) {
    counter.push(frequencyobj[key]);
  }
  counter.sort((a, b) => a - b);
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] === counter[i + 1]) {
      return false;
    }
  }
  return true;
};

let res = uniqueOccurrences([1, 2, 2, 1, 1, 3]);
console.log(res);
