/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        start = isBadVersion(parseInt(n/2))
        if (start) {
            min = 1
            max = parseInt(n/2)
        } else {
            min = parseInt(n/2)
            max = n
        }
        while (true) {
            test = parseInt((max+min)/2)
            if (isBadVersion(test)) {
                if (max == test) {
                    return min
                }
                max = test
            } else {
                if (min == test) {
                    return max
                }
                min = test
            }
            if (max == min) {
                return max
            }
        }
    };
};