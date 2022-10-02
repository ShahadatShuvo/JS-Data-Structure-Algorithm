var decodeMessage = function (key, message) {
  key = key.replace(/\s/g, "");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  let j = 0;
  for (let i = 0; i < key.length; i++) {
    if (!obj[key[i]]) {
      obj[key[i]] = alphabet[j];
      j++;
    }
  }
  let str = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      str += " ";
    } else {
      str += obj[message[i]];
    }
  }
  return str;
};

let res = decodeMessage(
  "eljuxhpwnyrdgtqkviszcfmabo",
  "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
);
console.log(res);
