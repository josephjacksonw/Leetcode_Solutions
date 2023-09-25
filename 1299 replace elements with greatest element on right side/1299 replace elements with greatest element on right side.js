/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    largest = arr[arr.length-1]
    arr[arr.length-1] = -1
    for (i=arr.length -2; i > -1; i--) {
        temp = arr[i]
        arr[i] = largest
        largest = Math.max(largest, temp)
    }
    return arr
};