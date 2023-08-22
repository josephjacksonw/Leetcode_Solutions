/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    output = 0
    for (x=0; x < s.length; x++) {
        i = x
        count = 1
        temp = []
        temp.push(s[i])
        going = true
        while (going) {
            if (temp.includes(s[i+1]) || i+1 == s.length) {
                going = false
                output = Math.max(output, count)
            } else {
                i ++
                count ++
                temp.push(s[i])
            }
        }
    }
    return output
};