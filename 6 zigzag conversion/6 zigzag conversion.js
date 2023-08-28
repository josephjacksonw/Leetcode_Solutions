/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  build = []
  for (i=0; i<numRows.length; i++) {
      build.push("")
  }
  direction = 1
  count = 0
  for (i=0; i<s.length; i++) {
      build[count] += s[i]
      count += direction
      if (direction == 1 && count == numRows-1) {
          direction = -1
      } else if (direction == -1 && count == 0) {
          direction = 1
      }
  }
  output = ""
  for (i=0; i<build.length; i++) {
      build[i] = build[i].substring(9)
      output += build[i]
  }
  return output
};