var countPoints = function (rings) {
  let obj = {};
  for (let i = 0; i < rings.length; i += 2) {
    let color = rings[i];
    let label = rings[i + 1];
    obj[label] = (obj[label] || "") + color;
  }
  console.log(obj);
  let counter = 0;
  for (key in obj) {
    let str = obj[key];
    let temp = 0;
    let r = 0,
      g = 0,
      b = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "R") {
        if (!r) {
          temp++;
          r = 1;
        }
      }
      if (str[i] === "G") {
        if (!g) {
          temp++;
          g = 1;
        }
      }
      if (str[i] === "B") {
        if (!b) {
          temp++;
          b = 1;
        }
      }
    }
    if (temp === 3) {
      counter++;
    }
  }
  return counter;
};

let res = countPoints("B0R0G0R9R0B0G0");
console.log(res);
