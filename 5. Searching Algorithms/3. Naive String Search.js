function naiveStringSearch(str, query) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let flag = 0;
    for (let j = 0; j < query.length; j++) {
      if (query[j] !== str[i + j]) {
        break;
      } else {
        flag++;
      }
    }
    if (flag === query.length) {
      counter++;
    }
  }
  return counter;
}

let res = naiveStringSearch("wowomgzomg", "wo");
console.log(res);
