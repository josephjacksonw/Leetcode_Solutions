/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  b = 0
  a = 0
  l = 0
  o = 0
  n = 0
  output = 0
  for (i=0; i<text.length; i++) {
      if (text[i] == "b") {
          b++
      } else if (text[i] == "a") {
          a++
      } else if (text[i] == "l") {
          l++
      } else if (text[i] == "o") {
          o++
      } else if (text[i] == "n") {
          n++
      }
  }
  while (b>=1 && a>=1 && l>=2 && o>=2 && n>=1) {
      output ++
      b --
      a --
      l -= 2
      o -= 2
      n --
  }
  return output
};