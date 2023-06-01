/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  //sort both in descending size then give the most demanding kid the largest cookie?
  if (s.length == 0) {
      return 0
  }
  s.sort(function(a, b){return b-a})
  g.sort(function(a, b){return b-a})
  sSpot = 0
  output = 0
  //console.log("s: " + s)
  //console.log("g: " + g)
  for(i=0; i < g.length; i ++) {
      //check if s is empty
      //if first option is to small for child, skip child
      //if first option is large enough for the child: remove that cookie and add to output
      //console.log("g[i]: " + g[i] + ", sSpot: " + sSpot)
      if (g[i] <= s[sSpot]) { 
          output ++
          sSpot ++
          if (sSpot == s.length) {
              return output
          }
      } /*else {

      }*/
  }
  return output
};