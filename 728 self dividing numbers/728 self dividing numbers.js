/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    output = []
    temp = left
    while (temp <= right) {
        //take the digit, make an array of its digits, check to see if its good, and add it to output if it is
        check = temp.toString().split("");
        good = true;
        for (i = 0; i < check.length; i++) {
            if (temp % parseInt(check[i]) != 0) {
                i = check.length
            } else if (temp % parseInt(check[i]) == 0 && i + 1 == check.length) {
                output.push(temp)
            }
        }
        temp ++
    }
    return output
};