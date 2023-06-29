/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    max = 0
    count = 0
    prev = 0
    for (i = 0; i < forts.length; i ++) {
        if (i == 0) {
            while (forts[i] == 0) {
                i ++
            }
        }
        if (forts[i] == 1) {
            if (prev == -1) {
                max = Math.max(max, count)
            } 
            prev = 1
            count = 0
        }
        if (forts[i] == -1) {
            if (prev == 1) {
                max = Math.max(max, count)
            }
            prev = -1
            count = 0
        }
        if (forts[i] == 0) {
            count ++
        }
    }
    return max
};