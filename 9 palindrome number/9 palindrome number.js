/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    array = x.toString().split("")
    for (i=0; i < array.length; i++) {
        if (array[i] != array[array.length-1-i]) {
            return false
        }
    }
    return true;
};