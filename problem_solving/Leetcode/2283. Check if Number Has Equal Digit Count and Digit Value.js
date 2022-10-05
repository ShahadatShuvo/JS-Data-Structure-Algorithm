var digitCount = function (num) {
  let temp = 0;
  for (let i = 0; i < num.length; i++) {
    let counter = 0;
    for (let j = 0; j < num.length; j++) {
      if (Number(num[j]) === i) {
        counter++;
      }
    }
    if (counter !== Number(num[i])) {
      temp = 0;
      break;
    }
    temp = 1;
  }
  if (temp === 1) {
    return true;
  } else {
    return false;
  }
};

let res = digitCount("030");

console.log(res);
