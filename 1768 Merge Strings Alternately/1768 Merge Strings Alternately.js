/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  spot = 0;
  output = "";
  //find out how many are in each word and just stop at the higher one?, its faster then checking every time
  cap1 = word1.length;
  cap2 = word2.length;
  stopPoint = Math.max(cap1, cap2);
  for (i = 0; i < stopPoint; i++) {
      if (i < cap1) {
          output += word1[i];
      }
      if (i < cap2) {
          output += word2[i];
      }
  }
  return output;
};