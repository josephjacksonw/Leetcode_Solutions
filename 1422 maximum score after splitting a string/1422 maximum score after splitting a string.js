/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    check = 1
    max = 0
    current = 0
    if (s[0] == '0') {
        current ++
    }
    for (i=1; i<s.length; i++) {
        if (s[i] == '1') {
            current ++
        }
    }
    max = Math.max (max, current)
    for (i=1; i<s.length-1; i++) {
        if (s[i] == '1') {
            current --
        } else {
            current ++
            max = Math.max (max, current)
        }
    }
    return max
};