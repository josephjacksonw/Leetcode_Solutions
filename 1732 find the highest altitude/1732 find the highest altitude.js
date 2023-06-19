/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    current = 0
    max = 0
    for (i = 0; i < gain.length; i++) {
        current += gain[i]
        if (gain[i] > 0) {
            if (current > max) {
                max = current
            }
        }
    }
    return max
};