/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  output = []
  for (i = 0; i < s.length; i ++) {
      if (s[i] == s[i+1] && s[i] == s[i+2]) {
          spot = i 
          while (s[i] == s[i+3]) {
              i++
          }
          output.push([spot, i+2])
      }
  }
  return output
};