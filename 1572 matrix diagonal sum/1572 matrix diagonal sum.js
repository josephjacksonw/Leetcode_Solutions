/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    output = 0;
    for (i=0, x = mat.length-1; i < mat.length; i++, x --) {
        output += mat[i][i]
        if (i != x) {
            output += mat[i][x]
        }
    }
    return output
};