/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    //make the temp array
    //check the temp array
    output = []
    for (i=0; i<l.length; i++) {
        tempArr = []
        for (x = l[i]; x <= r[i]; x++) { //unsure about the <= working
            tempArr.push(nums[x])
        }
        //array made, then we check
        tempArr.sort(function(a, b){return b - a})
        length = tempArr[0] - tempArr[1]
        bp = 0
        for (j = 1; j < tempArr.length; j++) {
            if (tempArr[j-1] - tempArr[j] != length) {
                output.push(false)
                j = tempArr.length
                bp = 1
            }
        }
        if (bp == 0) {
            output.push(true)
        }
    }
    return output
};