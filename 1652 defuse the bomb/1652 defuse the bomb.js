/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  if (k == 0) {
      return new Array(code.length).fill(0)
  } else if (k > 0) {
      output = []
      for (i = 0; i < code.length; i++) {
          x = i
          sum = 0
          temp = k
          while (temp > 0) {
              if (x + 1 != code.length) {
                  x++
              } else {
                  x = 0
              }
              sum += code[x]
              temp --
          }
          output.push(sum)
      }
      return output
  } else {
      output = []
      for (i = 0; i < code.length; i++) {
          x = i
          sum = 0
          temp = k
          while (temp < 0) {
              if (x - 1 != -1) {
                  x--
              } else {
                  x = code.length - 1
              }
              sum += code[x]
              temp ++
          }
          output.push(sum)
      }
      return output
  }
};