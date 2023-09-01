/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  function revers(str) {
      if (str == "") {
          return ""
      } else {
          return revers(str.substr(1)) + str.charAt(0)
      }
  }
  output = ""
  for (i=0; i<s.length; i++) {
      if (s[i] != 'i') {
          output += s[i]
      } else {
          output = revers(output)
      }
  }
  return output
};