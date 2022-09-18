// /**
//  * Definition for isBadVersion()
//  *
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function me(n) {
    let left = 0;
    let right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid) === true) {
        if (isBadVersion(mid - 1) === false) {
          return mid;
        } else {
          right = mid - 1;
        }
      } else {
        if (isBadVersion(mid + 1) === true) {
          return mid + 1;
        } else {
          left = mid + 1;
        }
      }
    }

    // if(isBadVersion(n) === true)  return me(n-1);
    // if(isBadVersion(n) === false)  return n+1;
  };
};
