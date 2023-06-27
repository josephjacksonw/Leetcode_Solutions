/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length < 3) {
        if (nums[1] > nums[0]) {
            return 1
        } else {
            return 0
        }
    } else {
        for (i = 0; i < nums.length; i++) {
            if (i == 0 && nums[i] > nums[i+1]) {
                return 0
            } else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                return i
            }
        }
    }
    return nums.length - 1
};