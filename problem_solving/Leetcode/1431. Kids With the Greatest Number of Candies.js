var kidsWithCandies = function (candies, extraCandies) {
  let greatest = -Infinity;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > greatest) {
      greatest = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatest) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }
  return candies;
};

let res = kidsWithCandies([2, 3, 5, 1, 3], 3);
console.log(res);
