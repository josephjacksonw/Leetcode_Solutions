/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    archeck = []
    for (i=0; i<nums.length; i++) {
        if (archeck.includes(nums[i])) {
            return nums[i]
        }
        archeck.push(nums[i])
    }
};