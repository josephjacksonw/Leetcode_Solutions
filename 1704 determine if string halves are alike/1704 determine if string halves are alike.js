/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    count1 = 0
    count2 = 0
    for (i=0; i<s.length; i++) {
        if (s[i] == 'a' || s[i] == 'A' || s[i] == 'e' || s[i] == 'E' || s[i] == 'i' || s[i] == 'I' || s[i] == 'o' || s[i] == 'O' || s[i] == 'u' || s[i] == 'U') {
            if (2*i >= s.length) {
                count2 ++
            } else {
                count1 ++
            }
        }
    }
    if (count1 == count2) {
        return true;
    }
    return false
};