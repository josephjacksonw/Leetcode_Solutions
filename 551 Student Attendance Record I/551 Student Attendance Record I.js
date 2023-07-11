/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    a = 0
    count = 0
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            a++
            if (a > 1) {
                return false
            }
            count = 0
        } else if (s[i] == 'L') {
            count ++
            if (count == 3) {
                return false
            }
        } else {
            count = 0
        }
    }
    return true
};