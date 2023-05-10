/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  Ar1 = haystack.split("")
  Ar2 = needle.split("")
  setPoint = 0
  for (i = 0; i < Ar1.length; i++) {
      if (Ar1[i] == Ar2[setPoint]) {
          console.log("match at " + i + ", letter: " + Ar1[i])
          instance = i
          while (Ar1[i] == Ar2[setPoint]) {
              console.log("i: " + i + " letters: "+ Ar1[i] + Ar2[setPoint])
              i ++;
              setPoint ++;
              if (setPoint == Ar2.length) {
                  return instance
              }
          }
          i = instance
          console.log("not a match")
          setPoint = 0
          
      }
  }
  return -1
};