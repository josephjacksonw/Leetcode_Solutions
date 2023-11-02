/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    out = -1
    flip = 1
    for (i=0; i<nums.length; i++) {
        count = 0
        while (nums[i+1] == nums[i] + flip) {
            if (count == 0) {
                count = 2
            } else {
                count ++
            }
            flip *= -1
            i++
        }
        flip = 1
        if (count != 0) {
            out = Math.max(out, count)
            i--
        }
    }
    return out
};