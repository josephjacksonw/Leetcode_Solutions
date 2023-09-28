/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    out = []
    for (i=0; i< nums.length; i++) {
        if (nums[i]%2 == 0) {
            out.push(nums[i])
        } 
    }
    for (i=0; i< nums.length; i++) {
        if (nums[i]%2 == 1) {
            out.push(nums[i])
        }
    }
    return out
};