/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  w = s + s
  r = w.slice(1, w.length -1)
  for (i=0; i < r.length; i++) {
      if (r.slice(i, i + s.length) == s) {
          return true
      } else if (r.length - i < s.length) {
          return false
      }
  }
  return false
};