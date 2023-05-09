/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    n = matrix.length
    suggestedSum = 0
    while (n > 0) {
        suggestedSum += n
        n --
    }
    n = matrix.length
    tempsum = 0
    tempArray = []
    for (i=0; i < n; i++) {
        for (x=0; x < n; x++) {
            tempsum += matrix[i][x]
            if (tempArray.includes(matrix[i][x])) {
                return false
            } else
            tempArray.push(matrix[i][x])
        }
        if (tempsum != suggestedSum) {
            return false
        }
        tempsum = 0
        tempArray = []
    }
    for (i=0; i < n; i++) {
        for (x = 0; x < n; x++) {
            tempsum += matrix[x][i]
            if (tempArray.includes(matrix[x][i])) {
                return false
            } else
            tempArray.push(matrix[x][i])
        }
        if (tempsum != suggestedSum) {
            return false
        }
        tempsum = 0
        tempArray = []
    }
    return true
};