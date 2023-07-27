/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  empties = 0
  drank = 0
  while (numBottles > 0) {
      empties += numBottles
      drank += numBottles
      numBottles = 0
      while (empties >= numExchange) {
          numBottles ++
          empties -= numExchange
      }
  }
  return drank
};