/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    output = 0
    s = heights.toSorted(function(a, b){return a - b})
    for (i=0; i<s.length; i++) {
        if (s[i] != heights[i]) {
            output ++
        }
    }
    return output
};