/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    out = 0
    for (i=0; i<nums.length; i++) {
        while (nums[i] == nums[i+1]) {
            nums.splice(i, 1)
        }
        out ++
    }
    return out
};