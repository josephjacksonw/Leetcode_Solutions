/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    out = ""
    for (i=0; i<strs[0].length; i++) {
        for (j=1; j<strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                return out
            }
        }
        out += strs[0][i]
    }
    return out
};