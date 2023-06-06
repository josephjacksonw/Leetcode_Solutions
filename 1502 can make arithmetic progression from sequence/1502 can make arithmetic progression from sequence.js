/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a, b){return b - a})
    length = arr[0] - arr[1]
    for (i = 1; i < arr.length; i++) {
      if (arr[i-1] - arr[i] != length) {
        return false
      }
    }
    return true
};