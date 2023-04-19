/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  output = "";
  count = 0;
  for (i = s.length- 1; i > -1; i--) {
      // while we're moving along, we just pass any * and increase the count
      while (s[i] == "*") {
          i --;
          count ++;
      }
      // this means we're at a letter, so but we need to make sure that * will still increase the count
      while (count != 0) {
          // if this line is hitting, that means we have to skip for sure, but we don't know how far or what's coming after. We also are looping until count is done so we don't know for sure that everytime this will be a letter
          if (s[i] == "*") {
              i--;
              count ++;
          } else {
              i --;
              count --;
          }
      }
      if (s[i] == "*") {
          i ++;
      } else if (i > -1) {
          output += s[i]
      }
  }
  return output.split("").reverse().join("")
};