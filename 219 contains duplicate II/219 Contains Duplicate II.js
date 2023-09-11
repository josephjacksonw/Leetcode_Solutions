/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (i=0; i<nums.length; i++) {
        for (j=i+1; j<i+k+1; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
};