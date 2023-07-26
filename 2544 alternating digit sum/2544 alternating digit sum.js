/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  output = 0
  flip = 1
  x = n.toString()
  for (i=0; i < x.length; i++) {
      output += flip * parseInt(x[i])
      flip *= -1
  }
  return output
};