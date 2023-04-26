/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    str = num.toString()
    while(str.length > 1) {
        temp = 0
        for (i = 0; i < str.length; i++) {
            temp += parseInt(str[i])
        }
        str = temp.toString()
    }
    return parseInt(str)
};