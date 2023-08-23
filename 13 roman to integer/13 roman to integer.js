/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  output = 0
  for (i=0; i<s.length; i++) {
      if (s[i] == "I") {
          if (s[i+1] == "V") {
              i++
              output += 4
          } else if (s[i+1] == "X") {
              i++
              output += 9
          } else {
              output++
          }
      } else if (s[i] == "V") {
          output += 5
      } else if (s[i] == "X") {
          if (s[i+1] == "L") {
              i++
              output += 40
          } else if (s[i+1] == "C") {
              i++
              output += 90
          } else {
              output += 10
          }
      } else if (s[i] == "L") {
          output += 50
      } else if (s[i] == "C") {
          if (s[i+1] == "D") {
              i++
              output += 400
          } else if (s[i+1] == "M") {
              i++
              output += 900
          } else {
              output += 100
          }
      } else if (s[i] == "D") {
          output += 500
      } else if (s[i] == "M") {
          output += 1000
      }
  }
  return output
};