/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (i=0; i<nums.length; i++) {
        count = 0
        while (nums[i+count] == 0) {
            count ++
        }
        nums.splice(i, count)
        while (count > 0) {
            nums.push(0)
            count --
        }
    }
    return nums
};