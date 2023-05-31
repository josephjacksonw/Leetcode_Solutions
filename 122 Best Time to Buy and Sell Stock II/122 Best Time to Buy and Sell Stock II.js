/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  prof = 0
  bought = 0
  holding = 0
  for (i=0; i < prices.length; i++) {
      //console.log("i: " + i + ", prices[i]: " + prices[i] + ", bought: " + bought + ", holding?: " + holding + ", prof: " + prof)
      if (holding == 0) { // we aren't holding currently
          if (prices[i+1] > prices[i]) { // the price tomorrow will go up
              bought = prices[i]
              holding = 1
          }
      } else { // we currently have the stock and we have to make the most money
          //we can hold or sell
          if /* we should sell*/ (prices[i+1] < prices[i] || i + 1 == prices.length) {
              holding = 0
              prof += prices[i] - bought
              bought = 0
          }
          /*if (i + 1 == prices.length) {
              prof = prices[i] - bought
          }*/
      }
  }
  return prof
};