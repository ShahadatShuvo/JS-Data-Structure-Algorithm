// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...rest) {
  const frequencyObject = {};
  for (let i = 0; i < rest.length; i++) {
    frequencyObject[rest[i]] = (frequencyObject[rest[i]] || 0) + 1;
    if (frequencyObject[rest[i]] > 1) return true;
  }
  return false;
}

let res = areThereDuplicates("a", "b", "c", "a");
console.log(res);
