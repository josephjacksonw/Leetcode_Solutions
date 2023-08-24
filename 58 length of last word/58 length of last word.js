/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  count = 0
  place = s.length-1
  while (s[place] == " ") {
      place --
  }
  while (s[place] != " " && place > -1) {
      place --
      count ++
  }
  return count
};