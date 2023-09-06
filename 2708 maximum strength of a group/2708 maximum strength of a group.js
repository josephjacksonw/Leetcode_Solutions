/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    output = 0
    neg = []
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (output == 0) {
                output += nums[i]
            } else {
                output *= nums[i]
            }
        } else if (nums[i] < 0) {
            neg.push(nums[i])
        }
    }
    neg.sort(function(a, b){return a - b})
    c = 0
    while (c+1 < neg.length) {
        if (output == 0) {
            output += neg[c]
        } else {
            output *= neg[c]
        }
        output *= neg[c+1]
        c += 2
    }
    return output
};