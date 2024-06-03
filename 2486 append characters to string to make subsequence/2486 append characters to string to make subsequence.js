/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    counter = 0
    for (i=0; i<s.length; i++) {
        if (s[i] == t[counter]) {
            counter ++
            if (counter == t.length) {
                return 0
            }
        }
    }
    return t.length-counter
};