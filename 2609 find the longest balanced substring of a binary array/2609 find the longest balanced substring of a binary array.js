/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    max = 0
    for (i=0; i<s.length; i++) {
        if (s[i] == 0 && s[i+1] == 1) {
            count = 2
            t = 1
            while (s[i-t] == 0 && s[i+1+t] == 1) {
                count += 2
                t += 1
            }
            max = Math.max(max, count)
        }
    }
    return max
};