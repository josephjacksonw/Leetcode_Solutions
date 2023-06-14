/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  test = 1
  while (true) {
    if (test * test >= num) {
      if (test * test == num) {
        return true
      } else {
        return false
      }
    }
    test ++
  }
};