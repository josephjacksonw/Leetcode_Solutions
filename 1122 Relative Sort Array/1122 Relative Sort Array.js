/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    output = []
    for (i=0; i<arr2.length; i++) {
        for (j=0; j<arr1.length; j++) {
            while (arr2[i] == arr1[j]) {
                output.push(arr1[j])
                arr1.splice(j, 1)
            }
        }
    }
    arr1.sort(function(a, b){return a - b})
    return output.concat(arr1)
};