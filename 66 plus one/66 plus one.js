/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  spot = digits.length -1
  digits[spot] ++
  while (digits[spot] == 10) {
      if (spot == 0) {
          digits.unshift(0)
          spot ++
      }
      digits[spot] = 0
      digits[spot -1] ++
      spot --
  }
  return digits
};