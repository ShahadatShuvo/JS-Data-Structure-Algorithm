// DESCRIPTION:
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// add_letters('a', 'b', 'c') = 'f'
// add_letters('a', 'b') = 'c'
// add_letters('z') = 'z'
// add_letters('z', 'a') = 'a'
// add_letters('y', 'c', 'b') = 'd' # notice the letters overflowing
// add_letters() = 'z'

function add_letters(...arr) {
  //   console.log("g".charCodeAt(0)-96);
  //   String.fromCharCode(65, 66, 67); // returns 'ABC'
  if (arr.length === 0) return "z";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].charCodeAt(0) - 96;
  }
  if (sum > 26) {
    sum = sum % 26;
  }
  if (sum === 0) return "z";
  console.log(sum);
  let resultedChar = String.fromCharCode(sum + 96);
  return resultedChar;
}

let res = add_letters("t", "i", "u", "n", "n");

console.log(res);
