/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    left = 0
    right = 0
    max = 0
    delcheck = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            max = Math.max(max, left + right)
            left = right
            right = 0
            if (delcheck == 0) {
                delcheck = 1
            }
        } else {
            right ++
        }
    }
    if (delcheck == 0) {
        return nums.length - 1
    }
    return Math.max(max, left + right)
};