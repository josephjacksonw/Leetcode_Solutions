/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    c = 0
    for (i=0; i<arr.length; i++) {
        while (arr[i] % 2 == 1) {
            c++
            i++
            if (c == 3) {
                return true
            }
        }
        c = 0
    }
    return false
};