/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    output = 0
    piles.sort(function(a, b){return b - a})
    while(piles.length > 1) {
        piles.shift()
        output += piles[0]
        piles.shift()
        piles.pop()
    }
    return output
};