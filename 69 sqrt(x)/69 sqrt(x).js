/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    out = 0
    while (true) {
        if (out * out == x) {
            return out
        } else if (out * out > x) {
            return out -1
        }
        out ++
    }
};