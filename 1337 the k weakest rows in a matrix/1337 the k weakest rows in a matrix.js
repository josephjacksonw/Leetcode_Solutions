/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    str = []
    for (i=0; i<mat.length; i++) {
        rowstr = 0
        for (j=0; j<mat[i].length; j++) {
            if (mat[i][j] == 0) {
                j = mat[i].length
            } else {
                rowstr ++
            }
        }
        str.push([i, rowstr])
    }
    str.sort(function(a, b){return a[1] - b[1]})
    output = []
    for (i = 0; i<k; i++) {
        output.push(str[i][0])
    }
    return output
};