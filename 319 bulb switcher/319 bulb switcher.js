/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  i = 0
  while (true) {
      i++
      if (i * i > n) {
          return i-1
      }
  }
  
};
