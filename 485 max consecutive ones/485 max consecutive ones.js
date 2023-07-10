/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    max = 0
    count = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            max = Math.max(count, max)
            count = 0
        }
        else [
            count ++
        ]
    }
    return Math.max (count, max)
};