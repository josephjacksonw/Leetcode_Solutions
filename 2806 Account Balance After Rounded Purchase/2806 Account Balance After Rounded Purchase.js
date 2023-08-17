/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    alt = purchaseAmount % 10
    if (alt >= 5) {
      purchaseAmount += (10 - alt)
    } else {
      purchaseAmount -= alt
    }
    return 100 - purchaseAmount
};