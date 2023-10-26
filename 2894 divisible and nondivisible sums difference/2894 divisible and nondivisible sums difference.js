/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    s1 = 0
    s2 = 0
    count = 1
    while (count <= n) {
        if (count % m == 0) {
            s2 += count
        } else {
            s1 += count
        }
        count ++
    }
    return s1 - s2
};