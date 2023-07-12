/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if (arr.length == 1) {
        return arr[0]
    }
    tot = (arr.length / 4)
    count = 0
    for (i = 0; i < arr.length; i++) {
        count ++
        console.log("arr[i], count: " + arr[i] + ", " + count)
        if (count > tot) {
            return arr[i]
        }
        if (arr[i] != arr[i + 1]) {
            count = 0
        }
    }
};