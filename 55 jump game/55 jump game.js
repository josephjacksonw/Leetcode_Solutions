/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    j = nums[0]
    for (i=0; i < nums.length - 1; i++) {
        if (nums[i] > j) {
            j = nums[i]
        }
        if (j == 0) { 
            return false
        }
        j--
    }
    return true
};