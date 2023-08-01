/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  x = 0
  output = []
  while (x != n) {
      x++
      if (x % 15 == 0) {
          output.push("FizzBuzz")
      } else if (x % 3 == 0) {
          output.push("Fizz")
      } else if (x % 5 == 0) {
          output.push("Buzz")
      } else {
          output.push(x.toString())
      }
  }
  return output
};