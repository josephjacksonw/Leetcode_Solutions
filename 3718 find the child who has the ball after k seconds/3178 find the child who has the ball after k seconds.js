/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    spot = 0
    dir = 1
    while (k > 0) {
        if (dir == 1) {
            spot ++
        } else {
            spot --
        }
        if (spot == n-1) {
            dir = -1
        } else if (spot == 0) {
            dir = 1
        }
        k --
    }
    return spot
};