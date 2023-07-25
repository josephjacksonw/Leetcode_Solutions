/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  i = 0
  while (true) {
      if (arr[i+1] < arr[i]) {
          return i
      } else {
          i ++
      }
  }
};