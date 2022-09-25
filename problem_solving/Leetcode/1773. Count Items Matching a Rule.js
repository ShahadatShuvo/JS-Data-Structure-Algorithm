var countMatches = function (items, ruleKey, ruleValue) {
  let counter = 0;
  console.log(items.length);
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type") {
      if (items[i][0] === ruleValue) {
        counter++;
      }
    } else if (ruleKey == "color") {
      if (items[i][1] === ruleValue) {
        counter++;
      }
    } else {
      if (items[i][2] === ruleValue) {
        counter++;
      }
    }
  }
  return counter;
};

let res = countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"],
  ],
  "type",
  "phone"
);
console.log(res);
