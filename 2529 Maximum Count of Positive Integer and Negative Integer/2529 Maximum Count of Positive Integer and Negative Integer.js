/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    neg = 0
    i = 0
    while (nums[i] < 0) {
        neg ++
        i ++
    }
    while (nums[i] == 0) {
        i ++
    }
    pos = nums.length - i
    return Math.max(pos,neg)
};