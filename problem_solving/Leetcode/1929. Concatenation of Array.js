var getConcatenation = function (nums) {
  return (nums = [...nums, ...nums]);
};

let res = getConcatenation([1, 2, 3]);
console.log(res);
