/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    out = 0
    for (i=3; i<n+1; i++) {
        if (i%3 == 0 || i%5 == 0 || i%7 == 0) {
            out += i
        }
    }
    return out
};