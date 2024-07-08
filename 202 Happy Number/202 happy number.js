/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    c = 0
    check = []
    while (c < 100) {
        temp = Array.from(String(n).split(''))
        sum = 0
        for (i=0; i<temp.length; i++) {
            sum += (temp[i] * temp[i])
        }
        if (check.includes(sum)) {
            return false
        }
        check.push(sum)
        n = sum
        if (n == 1) {
            return true
        }
        c++
    }
    return false
};