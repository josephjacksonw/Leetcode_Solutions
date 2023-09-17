/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    start = guess(n)
    //if start = 0, return 
    if (start == 0) {
        return n
    } else if (start == -1) {
        //go start between n and 0 and find
        max = n
        min = 1
    } else {
        // the number is higher
        // search betweeen n and 2^31-1
        max = 2^31-1
        min = n
    }
    //technically I can while true until I get to the return
    while (true) {
        test = (max + min) / 2
        t2 = guess(test)
        if (t2 == 0) {
            return test
        } else if (t2 == -1) {
            //go lower
            max = test
        } else {
            //go higher
            min = test
        }
    }
};