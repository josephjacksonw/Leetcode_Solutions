/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    if (prices[0] > prices[1]) {
        l1 = prices[1]
        l2 = prices[0]
    } else {
        l1 = prices[0]
        l2 = prices[1]
    }
    for (i=2; i<prices.length; i++) {
        if (prices[i]<l2) {
            if (prices[i]<l1) {
                l2 = l1
                l1 = prices[i]
            } else {
                l2 = prices[i]
            }
        }
    }
    sum = l1 + l2
    if (sum > money) {
        return money
    }
    return money - sum

};