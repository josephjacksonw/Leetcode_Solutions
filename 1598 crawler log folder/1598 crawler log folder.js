/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    count = 0
    for (i=0; i<logs.length; i++) {
        if (logs[i] == "../") {
            if (count != 0) {
                count --
            }
        } else if (logs[i] != "./") {
            count ++
        }
    }
    return count
};