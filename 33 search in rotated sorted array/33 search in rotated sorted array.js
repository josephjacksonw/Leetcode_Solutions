/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length == 1) {
        if (nums[0] == target) {
            return 0
        } else {
            return -1
        }
    }
    reset = false
    for (i=0; i < nums.length; i++) {
        if (i != 0) {
            prev = nums[i-1]
            if (prev > nums[i]) {
                reset = true
            }
            if (nums[i] > target && reset == true) {
                return -1
            }
        }
        if (target == nums[i]) {
            return i
        }
    }
    return -1
};